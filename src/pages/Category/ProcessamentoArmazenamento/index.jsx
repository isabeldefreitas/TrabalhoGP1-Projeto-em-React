import { useEffect } from "react";
import { api } from "../../../services/api";
import { useState } from "react";
import { Navbar } from "../../../common/components/Header";
import { Footer } from "../../../common/components/Footer";
import * as Styles from "./style";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { GlobalStyle } from '../../../common/style/global';

export function ProcessamentoArmazenamento() {
  const [users, setUsers] = useState([]);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {

      const ghUsers = await api.get("/produtos");
      console.log(ghUsers.data);
      const result = ghUsers.data.filter((d) => {
        if(d.categoria == 3 || d.categoria.idCategoria == 3){
          return d;
        }
      })
      setUsers(result);
    }

    fetchData();
  }, []);

  const handleClick = () => {
    console.log("Clicou");
    setMenuIsVisible(!menuIsVisible);
  };

  return (
    <>
    <GlobalStyle/>
      <Navbar funcao={handleClick} />
      
      <Styles.Content>
        {users.map((res) => {
          return (
            <div key={res.idProduto} style={{ marginTop: '20px' }}>
              <Card style={{ width: '18rem', height: '528px' }}>
                <Card.Img variant="top" src={`data:image/jpeg;base64,${res.imagem}`} width="170px" height="250px" />
                <Card.Body style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>


                  <Card.Text style={{ fontSize: '14px' }}>
                    <Card.Title>{res.nome}</Card.Title>
                    {res.descricao}
                  </Card.Text>

                  <Card.Text>
                    <h2>R${res.valorUnitario}</h2>
                    <Button style={{ marginTop: '10px', width: '100%' }} variant="primary">Adicionar ao carrinho</Button>
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>
          )
        })}
      </Styles.Content>
      <Footer />

    </>
  );
}

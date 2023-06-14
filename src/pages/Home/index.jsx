import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { Navbar } from "../../common/components/Header";
import { Footer } from "../../common/components/Footer";
import { MenuHamburguer } from "../../common/components/MenuHamburguer";
import * as Styles from "./style";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"



export function Home() {
  const [users, setUsers] = useState([]);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {

      const ghUsers = await api.get("/produtos");
      console.log(ghUsers.data);
      setUsers(ghUsers.data);
    }

    fetchData();
  }, []);

  const handleClick = () => {
    console.log("Clicou");
    setMenuIsVisible(!menuIsVisible);
  };

  return (
    <>
      <Navbar funcao={handleClick} />
      <Styles.Banner>
        {
          // Ternário quando tenho 2 opçoes:
          /* {menuIsVisible? fazSeForTrue : fazSeForFalse}  */
        }

        {
          // Quando só faço se for true:
          /* {menuIsVisible&&SoFazSeForTrue}  */
        }
        {menuIsVisible && <MenuHamburguer />}
        <img
          src="https://www.tendinfo.com.br/image/cache/catalog/001%20outubro/banner%20outubro%2021%205-1920x786.jpg"
          width={"100%"}
          height={"100%"}
        />
      </Styles.Banner>
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

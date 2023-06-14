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
            
<div key={res.idProduto}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`data:image/jpeg;base64,${res.imagem}`} width="170px" height="110px" />
      <Card.Body>
        <Card.Title>{res.nome}</Card.Title>
        
        <Card.Text>
        {res.descricao}
        <h2>{res.valorUnitario}</h2>
        </Card.Text>
        <Button variant="primary">Detalhes</Button>
      </Card.Body>
    </Card>
    </div> )
    })}
         <Footer />
      </Styles.Content>

     
    </>
  );
}

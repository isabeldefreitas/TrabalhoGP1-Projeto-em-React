import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { Navbar } from "../../common/components/Header";
import { Footer } from "../../common/components/Footer";
import { GlobalStyle } from '../../common/style/global';
import * as Styles from "./styles";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export function Bag() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [bagItens, setBagItens] = useState([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    localStorage.getItem("username") &&
      setUsername(localStorage.getItem("username"));
    localStorage.getItem("bag") &&
      setBagItens(JSON.parse(localStorage.getItem("bag")));
  }, []);

  const handleClick = () => {
    setMenuIsVisible(!menuIsVisible);
  };

  const handleRemoveItem = (id) => {
    const novoArray = bagItens?.filter((produto) => produto.idProduto != id);
    localStorage.setItem("bag", JSON.stringify(novoArray));
    setBagItens(novoArray);
  };

  return (
    <Styles.Container>
      <GlobalStyle />
      <Navbar funcao={handleClick} />

      {bagItens?.length >= 1 ? (
        <div style = {{display:'flex', flexDirection:'column', width: '100%', alignItems: 'center'}}>
        <Styles.Content>
          {bagItens?.map((product) => {
            return (
              <div key={product.idProduto} style={{ marginTop: "20px" }}>
                <Card style={{ width: "18rem", height: "528px" }}>
                  <Card.Img
                    variant="top"
                    src={`data:image/jpeg;base64,${product.imagem}`}
                    width="170px"
                    height="250px"
                  />
                  <Card.Body
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Card.Text style={{ fontSize: "14px" }}>
                      <Card.Title>{product.nome}</Card.Title>
                      {product.descricao}
                    </Card.Text>

                    <Card.Text>
                      <h2>R${product.valorUnitario}</h2>
                      <Button
                        onClick={() => handleRemoveItem(product.idProduto)}
                        style={{
                          marginTop: "10px",
                          width: "100%",
                          backgroundColor: "#9370DB ",
                          border: "#9370DB",
                        }}
                        variant="primary"
                      >
                        Remover do Carrinho
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
          
        </Styles.Content>
        <Styles.Button>Finalize sua compra</Styles.Button>
        </div>
      ) : (
        <Styles.Message>
          Poxa, {username} ! Você ainda não adicionou nenhum item ao carrinho!
          
        </Styles.Message>
      )}
      <Footer />
    </Styles.Container>
  );
}
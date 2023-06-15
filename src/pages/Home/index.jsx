import * as Styles from "./style";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { Navbar } from "../../common/components/Header";
import { Footer } from "../../common/components/Footer";
import { MenuHamburguer } from "../../common/components/MenuHamburguer";
import { Loader } from "../../common/components/Loader";
import { GlobalStyle } from '../../common/style/global';
import { Link } from 'react-router-dom'
import { useProducts } from "../../hooks/useProducts";

export function Home() {
  // const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [bagList, setBagList] = useState([]);
  const { filteredProducts, products } = useProducts()

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await api.get("/produtos");
  //     setProducts(response.data);
  //     setIsLoading(false);
  //   }

  //   fetchData();
  // }, []);
  useEffect(() => {
    localStorage.setItem("bag", JSON.stringify(bagList));
  }, [bagList]);

  const handleClick = () => {
    setMenuIsVisible(!menuIsVisible);
  };

  const handleAddBag = (product) => {
    bagList?.some((produto) => produto.idProduto === product.idProduto)
      ? alert("Produto já adicionado ao carrinho")
      : setBagList(
        [...bagList, product],
        alert("Produto adicionado ao carrinho com sucesso!")
      );
  };

  return (
    <>
      <GlobalStyle />
      <Navbar funcao={handleClick} />
      <Styles.Banner>

        {menuIsVisible && <MenuHamburguer />}
        <img
          src="https://www.tendinfo.com.br/image/cache/catalog/001%20outubro/banner%20outubro%2021%205-1920x786.jpg"
          width={"100%"}
          height={"100%"}
        />
      </Styles.Banner>
      <Styles.Content>
        {products.length == 0 ? <Loader /> :
          filteredProducts.map((res) => {
            return (
              <div key={res.idProduto} style={{ marginTop: '20px' }}>
                <Card style={{ width: '18rem', height: '528px' }}>
                  <Card.Img
                    variant="top"
                    src={`data:image/jpeg;base64,${res.imagem}`}
                    width="170px"
                    height="250px"
                  />

                  <Card.Body style={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: 'space-between',
                  }}>


                    <Card.Text style={{ fontSize: '14px' }}>
                      <Card.Title>{res.nome}</Card.Title>
                      {res.descricao}
                    </Card.Text>

                    <Card.Text>
                      <h2>R${res.valorUnitario}</h2>

                      <Button style={{
                        marginTop: '10px',
                        width: '100%',
                        backgroundColor: '#9370DB ',
                        border: '#9370DB'
                      }}
                        variant="primary"
                        onClick={() => handleAddBag(res)}
                      >Adicionar ao carrinho</Button>


                    </Card.Text>

                  </Card.Body>
                </Card>
              </div>
            )
          })

        }
      </Styles.Content>
      <Footer />
    </>
  );
}

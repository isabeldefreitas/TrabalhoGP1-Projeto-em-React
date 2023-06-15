import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMenu, BiMicrochip, BiSearchAlt2, BiShoppingBag } from "react-icons/bi";
import { GlobalStyle } from '../../style/global';
import { Button, Container, Form, Input, Item, Logo } from "./styles";
import { Saudacao } from "./styles";
//import { useProducts } from "../../../hooks/useProducts";
//import { Search } from "../../components/Search";

import { MenuHamburguer } from "../MenuHamburguer";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false)
  //const { products, setFilteredProducts } = useProducts()
  const showMenu = () => setMenu(!menu)
  const navigate = useNavigate();

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, [localStorage.getItem("username")]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Logo>
          <BiMicrochip /> HardwareTec
        </Logo>
        <Saudacao>{username ? "Olá, " + username : "Faça o login"}</Saudacao>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Busque um produto"
          //onChange={(e) => setFilteredProducts(products.filter(product => product.nome.toLowerCase().includes(e.target.value.toLowerCase())))}
          />
          <Button type="submit">
            <BiSearchAlt2 />
          </Button>
        </Form>
        <Item>
          <Link to="/bag">
            <BiShoppingBag size={35} />
          </Link>
        </Item>
        <Item>
          <Logo>
            <Link onClick={() => showMenu()}>
              <BiMenu size={40} />
            </Link>
          </Logo>
        </Item>

        {menu && <MenuHamburguer active={setMenu} />}
      </Container>
    </>
  );
};
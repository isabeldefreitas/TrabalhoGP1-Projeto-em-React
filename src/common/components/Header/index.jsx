import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMenu, BiMicrochip, BiSearchAlt2, BiShoppingBag } from "react-icons/bi";
import { GlobalStyle } from '../../style/global';
import { Button, Container, Form, Input, Item, Logo } from "./styles";

import { MenuHamburguer } from "../MenuHamburguer";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false)

  const showMenu = () => setMenu(!menu)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <>
    <GlobalStyle/>
    <Container>
      <Logo>
          <BiMicrochip /> HardwareTec
      </Logo>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Busque um produto"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
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

      {menu && <MenuHamburguer active={setMenu}/>}
      {/* <Outlet /> */}
    </Container>
    </>
  );
};
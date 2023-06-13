import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMenu, BiMicrochip, BiSearchAlt2, BiShoppingBag } from "react-icons/bi";

import { Button, Container, Form, Input, Item, Logo } from "./styles";

export const Navbar = ({funcao}) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
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
        <Link to="/">
          <BiShoppingBag />
        </Link>
      </Item>
      <Item>
      <Logo>
        <button onClick={() => funcao()}>
        <Link to="/">
          <BiMenu />
        </Link>
        </button>
      </Logo>
      </Item>

      {/* <Outlet /> */}
    </Container>
  );
};

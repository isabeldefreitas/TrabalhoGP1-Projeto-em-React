import { useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { BiMicrochip, BiSearchAlt2, BiShoppingBag } from "react-icons/bi";

import { Container, Logo } from "./styles";


export const Navbar = () => {
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
                    <Link to="/">
                        <BiMicrochip /> HardwareTech
                    </Link>
                </Logo>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Busque um produto"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <button type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form>
                <div>
                    <Link to="/">
                        <BiShoppingBag />
                    </Link>
                </div>

          
            <Outlet />
        </Container>
    );
};


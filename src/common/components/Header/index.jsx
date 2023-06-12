import { useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { BiMicrochip, BiSearchAlt2, BiShoppingBag } from "react-icons/bi";

import "./header.css";


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
        <>
            <nav id="navbar">
                <h2>
                    <Link to="/">
                        <BiMicrochip /> HardwareTech
                    </Link>
                </h2>
                <h2>
                    <Link to="/">
                        <BiShoppingBag />
                    </Link>
                </h2>

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
            </nav>
            <Outlet />
        </>
    );
};


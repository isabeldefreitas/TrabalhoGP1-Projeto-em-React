import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AddProduct } from "../pages/AddProduct";
import { LoginCliente } from "../pages/LoginCliente";
// import { LoginFuncionario } from "../pages/LoginFuncionario";
import { Navbar} from "../common/components/Header";

import { Footer } from "../common/components/Footer";

export function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Navbar}>
                    <Route Component={Footer}>
                        <Route Component={Home} path="/" />
                        <Route Component={AddProduct} path="/create" />
                    </Route>
                </Route>
                <Route Component={LoginCliente} path="/loginCliente" />
            </Routes>
        </BrowserRouter>
    )
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AddProduct } from "../pages/AddProduct";
import { Login } from "../pages/Login";
import { Header } from "../common/components/Header";
import { Footer } from "../common/components/Footer";

export function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Header}>
                    <Route Component={Footer}>
                        <Route Component={Home} path="/" />
                        <Route Component={AddProduct} path="/create" />
                    </Route>
                </Route>
                <Route Component={Login} path="/login" />
            </Routes>
        </BrowserRouter>
    )
}
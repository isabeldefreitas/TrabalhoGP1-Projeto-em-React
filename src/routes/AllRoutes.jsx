import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AddProduct } from "../pages/AddProduct";
import { LoginCliente } from "../pages/LoginCliente";


export function AllRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={AddProduct} path="/teste" />
        {/*<Route Component={LoginCliente} path="/loginCliente" />
        <Route Component={AddProduct} path="/create" />*/}
      </Routes>
    </BrowserRouter>
  );
}
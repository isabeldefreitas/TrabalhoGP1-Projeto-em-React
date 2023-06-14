import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Bag } from "../pages/Bag";
//import { AddProduct } from "../pages/AddProduct";



export function AllRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Bag} path="/bag" />
        {/* //<Route Component={AddProduct} path="/teste" /> */}
        {/*<Route Component={LoginCliente} path="/loginCliente" />
        <Route Component={AddProduct} path="/create" />*/}
      </Routes>
    </BrowserRouter>
  );
}
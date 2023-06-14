import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Bag } from "../pages/Bag";
import { Login } from "../pages/Login";



export function AllRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Bag} path="/bag" />
        <Route Component={Login} path="/login" />
        
      </Routes>
    </BrowserRouter>
  );
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Bag } from "../pages/Bag";
import { Login } from "../pages/Login";
import {EntradaeSaida} from "../pages/Category/EntradaeSaida"
import {ProcessamentoArmazenamento} from "../pages/Category/ProcessamentoArmazenamento"


export function AllRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Bag} path="/bag" />
        <Route Component={Login} path="/login" />
        <Route Component={EntradaeSaida} path="/entradaesaida" />
        <Route Component={ProcessamentoArmazenamento} path="/processamentoarmazenamento" />

        
      </Routes>
    </BrowserRouter>
  );
}
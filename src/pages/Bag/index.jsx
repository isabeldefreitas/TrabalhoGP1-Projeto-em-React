import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { Navbar } from "../../common/components/Header";
import { Footer } from "../../common/components/Footer";
import { GlobalStyle } from '../../common/style/global';

export function Bag() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [menuIsVisible, setMenuIsVisible] = useState(false);
const bagItens = localStorage.getItem("bag") ? JSON.parse(localStorage.getItem("bag")) :[];

  useEffect(() => {
    async function fetchData() {

      const ghUsers = await api.get("/produtos");
      setUsers(ghUsers.data);
      setIsLoading(false);
    }

    fetchData();
    montaCarrinho();
  }, []);
  const montaCarrinho = () => {
   bagItens.map (item => {
      let teste = users.find(i => {

      return i.idProduto === item.idProduto
      })
      console.log(teste)
   })
  }
  const handleClick = () => {
    console.log("Clicou");
    setMenuIsVisible(!menuIsVisible);
  };

  return (
    <>
      <GlobalStyle/>
      <Navbar funcao={handleClick} />

      <Footer />

    </>
  );
}
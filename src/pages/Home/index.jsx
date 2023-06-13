import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";
import { Navbar } from "../../common/components/Header";
import { Footer } from "../../common/components/Footer";
import { MenuHamburguer } from "../../common/components/MenuHamburguer";
import * as Styles from "./style";



export function Home() {
  const [users, setUsers] = useState([]);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      
      const ghUsers  = await api.get("/produtos");
      console.log(ghUsers.data);
      setUsers(ghUsers.data);
    }

    fetchData();
  }, []);

  const handleClick = () => {
    console.log("Clicou");
    setMenuIsVisible(!menuIsVisible);
  };

  return (
    <>
      <Navbar funcao={handleClick} />
      <Styles.Banner>
        {
          // Ternário quando tenho 2 opçoes:
          /* {menuIsVisible? fazSeForTrue : fazSeForFalse}  */
        }

        {
          // Quando só faço se for true:
          /* {menuIsVisible&&SoFazSeForTrue}  */
        }
        {menuIsVisible && <MenuHamburguer />}
        <img
          src="https://cdn.dooca.store/1841/files/banner-kit-gamer.jpg?v=1625321524"
          width={"100%"}
          height={"100%"}
        />
      </Styles.Banner>
      <Styles.Content>
        {/* Aqui vai todo o conteúdo da página home */}
      </Styles.Content>
        {users.map((res)=>{
          return(
            
              <div key= {res.idProduto}>
                <a>{res.nome}</a>
                <a>{res.descricao}</a>
              </div>
            
          )
        })}
      <Footer />
    </>
  );
}

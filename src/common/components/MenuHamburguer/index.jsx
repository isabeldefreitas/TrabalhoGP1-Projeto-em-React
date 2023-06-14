// import { useState } from "react";
import * as Styles from "./styles";

import { MenuItem } from './MenuItem'

import { 
  FaTimes, 
  FaHome,
  FaUserInjured,
  FaMouse,
  FaLaptop
} from 'react-icons/fa'

export const MenuHamburguer = ({ active }) => {

  const closeMenu = () => {
    active(false)
  }

  const menuOptions = [

    {icon: FaHome, name: "Home", LinkToPath: "/"},
    {icon: FaUserInjured, name: "Login", LinkToPath: "/login"},
    {icon: FaMouse, name: "Entrada e saída", LinkToPath: "/entradaesaida"},
    {icon: FaLaptop, name: "Processamento", LinkToPath: "/processamentoarmazenamento"},
    
  ]

  return (
    <>
    <Styles.Container sidebar={active}>
      <FaTimes onClick={closeMenu} />  
      <Styles.Content>
        {menuOptions.map((opt) => {
          return <MenuItem Icon={opt.icon} Text={opt.name} LinkToPath={opt.LinkToPath}/>
        })}
      </Styles.Content>
    </Styles.Container>

      {/* <Styles.Menu>
        <ul>
          <li>Entrada e saída</li>
          
          <li>Processamento e armazenamento</li>
        </ul>
      </Styles.Menu> */}
    </>
  );
};

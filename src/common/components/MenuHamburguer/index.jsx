// import { useState } from "react";
import * as Styles from "./styles";

import { MenuItem } from './MenuItem'

import { 
  FaTimes, 
  FaHome,
} from 'react-icons/fa'

export const MenuHamburguer = ({ active }) => {

  const closeMenu = () => {
    active(false)
  }

  const menuOptions = [
    {icon: FaHome, name: "Home", LinkToPath: "/"},
    {icon: FaHome, name: "Entrada e saída", LinkToPath: "/entrada-saida"},
    {icon: FaHome, name: "Processamento e armazenamento", LinkToPath: "/proc-armz"},
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

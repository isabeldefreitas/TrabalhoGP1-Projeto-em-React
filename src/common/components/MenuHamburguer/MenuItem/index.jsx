import * as Styles from "./style.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from '../../../style/global.js';
export const MenuItem = ({ Icon, Text, LinkToPath }) => {
  
	const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
	
	const handleNavigate = () => {
		navigate(`${LinkToPath}`, { replace: true });
	};

  const handleLogout = () => {
    alert("Até a próxima!");
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    localStorage.getItem("token") ? setIsLogged(true) : setIsLogged(false);
  }, [localStorage.getItem("token")]);

  return (
    <>
    <GlobalStyle/>
    {Text == "Logout" && isLogged && (
    <Styles.Container onClick={handleNavigate}>
      <Icon />
      {Text}
    </Styles.Container>
    )}
    {Text == "Login" && !isLogged && (
      <Styles.Container onClick={handleNavigate}>
        <Icon />
        {Text}
      </Styles.Container>
    )}

    {Text != "Login" && Text != "Logout" && (
      <Styles.Container onClick={handleNavigate}>
        <Icon />
        {Text}
      </Styles.Container>
    )}
    </>
  )
}
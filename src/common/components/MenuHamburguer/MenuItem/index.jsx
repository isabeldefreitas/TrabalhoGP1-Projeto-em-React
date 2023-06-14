import * as Styles from "./style.js";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from '../../../style/global.js';
export const MenuItem = ({ Icon, Text, LinkToPath }) => {
  
	const navigate = useNavigate();
	
	const handleNavigate = () => {
		navigate(`${LinkToPath}`, { replace: true });
	};

  return (
    <>
    <GlobalStyle/>
    <Styles.Container onClick={handleNavigate}>
      <Icon />
      {Text}
    </Styles.Container>
    </>
  )
}
import * as Styles from "./style.js";
import { useNavigate } from "react-router-dom";

export const MenuItem = ({ Icon, Text, LinkToPath }) => {
  
	const navigate = useNavigate();
	
	const handleNavigate = () => {
		navigate(`${LinkToPath}`, { replace: true });
	};

  return (
    <Styles.Container onClick={handleNavigate}>
      <Icon />
      {Text}
    </Styles.Container>
  )
}
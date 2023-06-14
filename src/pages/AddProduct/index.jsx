import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { api } from "../../services/api";

export function AddProduct() {
    
    
    
    {users.map((res) => {
         return (
            
<div key={res.idProduto}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`data:image/jpeg;base64,${res.imagem}`} width="170px" height="110px" />
      <Card.Body>
        <Card.Title>{res.nome}</Card.Title>
        <Card.Text>
        {res.descricao}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   </div> )
    })}}

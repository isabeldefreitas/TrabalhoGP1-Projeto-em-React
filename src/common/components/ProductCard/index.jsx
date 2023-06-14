import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
export default function ProductCard({res}) {
function add (){
    
    let bag = localStorage.getItem("bag") ? JSON.parse(localStorage.getItem("bag")) :[];
    let existe = bag.find((item) => {
        return item.idProduto == res.idProduto
        })
        if (!existe) {
            
            bag = [
                {
                    idProduto: res.idProduto,
                    quantidade: 1,
                },
                ...bag
            ]
        }else{
            bag = bag.map(item => {
                if (item.idProduto == res.idProduto) {
                    return {
                        idProduto: res.idProduto, 
                        quantidade: item.quantidade+1,
                    }
                }
                return item
            })
        }
            localStorage.setItem("bag", JSON.stringify(bag));
}
    return (
    <div key={res.idProduto} style={{ marginTop: '20px' }}>
        <Card style={{ width: '18rem', height: '528px' }}>
        <Card.Img variant="top" src={`data:image/jpeg;base64,${res.imagem}`} width="170px" height="250px" />
        <Card.Body style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between' }}>

        <Card.Text style={{ fontSize: '14px' }}>
            <Card.Title>{res.nome}</Card.Title>
            {res.descricao}
        </Card.Text>

        <Card.Text>
            <h2>R${res.valorUnitario}</h2>
            <Button onClick = {add} style={{ marginTop: '10px', width: '100%' }} variant="primary">Adicionar ao carrinho</Button>
        </Card.Text>

        </Card.Body>
        </Card>
    </div>
    )
}
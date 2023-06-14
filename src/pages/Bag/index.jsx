import React from "react";

export function Bag() {
 return (
   <Container>
    
  <Carrinho>
    <header>
      <div className="boxsuperior">
        <img src="../../assets/img/logo-transparente.png" alt="logo"/>
        <div>
          <a href="../home-page/home.html">Home</a>
          <a onClick="scrollToContainer()" style="cursor:pointer">Contato</a>
          <a href="../carrinho/carrinho.html"><img src="../../assets/img/car-shop1.svg" alt="carrinho"/></a>
        </div>
      </div>
    </header>
    <main>
      <h2 id="titulo">Carrinho</h2>
      <div className="container_carrinho">
        <ul>
          
        </ul>

      </div>
      <div className="btn-container"><button class="btn-compra-mais">Continuar comprando</button>
      <button className="btn-finalizar-compra">Finalizar compra</button></div>
    
    </main>
    </Carrinho>
    </Container>
    
     );
}
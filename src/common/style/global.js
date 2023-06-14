import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    height: 100%;
    background-color: black;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  button {
    cursor: pointer;
    transition: filter .4s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Responsividade para grid-template-columns */
  /* Definição inicial: 5 colunas */
  grid-template-columns: repeat(5, 1fr);

  /* Ajuste para 4 colunas em telas menores que 1612px */
  @media (max-width: 1612px) {
    grid-template-columns: repeat(4, 1fr);
  }

  /* Ajuste para 3 colunas em telas menores que 1512px */
  @media (max-width: 1512px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Ajuste para 2 colunas em telas menores que 1050px */
  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Ajuste para 1 coluna em telas menores que 680px */
  @media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }

  cursor: pointer;
`;

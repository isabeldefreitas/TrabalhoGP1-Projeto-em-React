import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    body, html {
        margin: 0;
        height: 100%;
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

    grid-template-columns: repeat(5, 1fr);
    @media (max-width: 1612px) {
      grid-template-columns: repeat(4, 1fr);   
    }  
    @media (max-width: 1512px) {
      grid-template-columns: repeat(3, 1fr);   
    }  
    @media (max-width: 1050px) {
      grid-template-columns: repeat(2, 1fr);
    }  
    @media (max-width: 680px) {
      grid-template-columns: repeat(1, 1fr);
    }  
      cursor: pointer;
`;
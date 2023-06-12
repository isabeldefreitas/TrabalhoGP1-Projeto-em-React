import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 {
        box-sizing: border-box;
    }

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
`;
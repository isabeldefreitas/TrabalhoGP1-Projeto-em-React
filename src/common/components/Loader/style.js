import styled from 'styled-components';

export const Loader = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
border-bottom: #fff 1px solid;
margin-left: auto;
margin-right: auto;
animation: spin linear 1s infinite;

@keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

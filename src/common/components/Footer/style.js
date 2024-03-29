import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #121212;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  bottom: 0;
  position: relative;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const Participantes = styled.div`

  flex-direction: column;
  text-decoration: underline;
  
  img {
    width: 50px;
    background: rgba(255, 255, 255, 0.767);
    border-radius: 50%;
    padding: 1px;
    margin-right: 5px;
  }

  a {
    :hover {
      text-decoration: underline;
    }
  }

  h3 {
    margin-bottom: 10px;
  }

  li {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Contatos = styled.div`
  border-left: 1px solid #5c5a5a;
  border-right: 1px solid #5c5a5a;
  padding: 0 10px;
  text-align: center;

  @media (max-width: 768px) {
    border: none;
    padding: 0;
    margin-bottom: 20px;
  }
`;

export const NewsLetter = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

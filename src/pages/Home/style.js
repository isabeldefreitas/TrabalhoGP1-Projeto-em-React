import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: 500px;
  background-color: black;
  padding-top: 30px;
  
  img{
    object-fit: contain;
  }

  @media (max-width: 768px) {
    height: 300px;
    padding-top: 15px; 
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 600px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
    padding: 15px;
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
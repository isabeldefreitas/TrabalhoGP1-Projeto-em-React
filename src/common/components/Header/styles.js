import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 55px;
  background-color: #121212;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: row;
    height: auto;
    padding: 10px;
  }
`;

export const Logo = styled.h2`
  color: #a838ad;
  margin-left: 10px;
  font-family: m;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const Item = styled.div`
  color: #eb77ef;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  padding: 0.2rem 0.8rem;
  border-radius: 4px;
  border: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: #eb77ef;
  border: 2px solid #a838ad;
  border-radius: 4px;
  color: #000;
  padding: 0.3rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Link = styled.a`
  cursor: pointer;
`;

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
`;
export const Logo = styled.h2`
  color: #a838ad;
  margin-left: 10px;
  font-family: m;
`;

export const Item = styled.div`
  color: #EB77EF;
  margin-right: 20px;
  
`;

export const Input = styled.input`
  padding: 0.2rem 0.8rem;
  border-radius: 4px;
  border: none;
`;

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
`;

export const Button = styled.button`
  background-color: #EB77EF;
  border: 2px solid #a838ad;
  border-radius: 4px;
  color: #000;
  padding: 0.3rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const a = styled.a`
  cursor: pointer;
`;
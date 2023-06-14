import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 17px;
  padding: 280px 0;
  border-radius: 4px;
`;

export const FormGroup = styled.div`
  height: 90px;
  width: 400px;
  max-width: 400px;
  margin: 1rem;
  padding: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  // Estilos para o seletor
`;

export const Button = styled.button`
  width: 15%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
`;
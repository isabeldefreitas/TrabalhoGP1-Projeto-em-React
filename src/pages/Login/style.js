import styled from 'styled-components';

export const Container = styled.div`
  
     background-image: url(https://img.freepik.com/fotos-premium/dispositivos-de-tecnologia-e-icones-conectados-ao-planeta-terra-digital_117023-449.jpg?w=740);
     background-repeat: no-repeat;
     background-size: cover;
`;


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
  height: 80px;
  width: 400px;
  max-width: 400px;
  
  padding: 1rem;

`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 900;
  font-size:x-large ;
  color: #a838ad;
  margin-top: 15px;
  
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
  width: 35%;
  padding: 10px;
  background-color: #9370DB;
  color: #fff;
  border: none;
  border-radius: 4px;
  
`;

export const FormRow  = styled.div`
  border: 1px solid rgba(131, 203, 248, 0.4);
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  background-color: rgba(245, 251, 255, 0.85);
`;

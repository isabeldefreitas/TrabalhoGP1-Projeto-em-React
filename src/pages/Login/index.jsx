import { useState } from 'react';
import { Navbar } from "../../common/components/Header";
import { Footer } from "../../common/components/Footer";
import { Button, FormGroup, Form, Input, Label} from "./style";
import { GlobalStyle } from '../../common/style/global';
import axios from 'axios';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api-restful-trabalho-final-copia-production.up.railway.app/api/login', {
        username: username,
        password: password
      });

      if (response.data.success) {
        alert('Login bem-sucedido!');
      } else {
        alert('Credenciais inválidas!');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao fazer login');
    }
  };

  return (
    <>
    <GlobalStyle />
    <Navbar/>
      <Form>
      <div className="form-row">
        <FormGroup className="form-group col-md-6">
          <Label htmlFor="inputEmail4">Seu nome:</Label>
          <Input type="email" className="form-control" id="inputEmail4" placeholder="Username" />
        </FormGroup>
        <FormGroup className="form-group col-md-6">
          <Label htmlFor="inputPassword4">Sua senha:</Label>
          <Input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
        </FormGroup>
      </div>
      <Button type="submit" className="btn btn-primary">Entrar</Button>
    </Form>
    <Footer/>
    </>
  );
}

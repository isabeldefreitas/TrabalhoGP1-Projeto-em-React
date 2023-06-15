import { useState } from 'react';
import { Navbar } from "../../common/components/Header";
import { Footer } from "../../common/components/Footer";
import { Button, FormGroup, Form, Input, Label, Container, FormRow } from "./style";
import { GlobalStyle } from '../../common/style/global';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
        password: password,
      });

      alert('Login bem-sucedido!');
      console.log(response.data);
      localStorage.setItem("token", response.data.accessToken)
      localStorage.setItem("username", response.data.nome);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("roles", response.data.roles);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert('Erro ao fazer login');
    }
  };

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Form>
          <FormRow>
            <Label htmlFor="inputName4">Faça Login</Label>
            <FormGroup className="form-group col-md-6">

              <Input onChange={handleUsernameChange} type="name" className="form-control" id="inputName4" placeholder="Username" />
            </FormGroup>
            <FormGroup className="form-group col-md-6">

              <Input onChange={handlePasswordChange} type="password" className="form-control" id="inputPassword4" placeholder="Password" />
            </FormGroup>
            <Button onClick={handleSubmit} type="submit" className="btn btn-primary">Entrar</Button>
          </FormRow>
        </Form>
      </Container>
      <Footer />
    </>
  );
}

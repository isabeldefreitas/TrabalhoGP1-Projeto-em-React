import { Navbar } from "../../common/components/Header";
import { Footer } from "../../common/components/Footer";
import { Button, FormGroup, Form, Input, Label } from "./style";

export function Login() {
  return (
    <>
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
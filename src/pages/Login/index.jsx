import { Navbar } from "../../common/components/Header";
import { Footer } from "../../common/components/Footer";
import { Button, FormGroup, Form, Input, Label, CheckBox } from "./style";

export function Login() {
  return (
    <>
    <Navbar/>
      <Form>
      <div className="form-row">
        <FormGroup className="form-group col-md-6">
          <Label htmlFor="inputEmail4">Username</Label>
          <Input type="email" className="form-control" id="inputEmail4" placeholder="username" />
        </FormGroup>
        <FormGroup className="form-group col-md-6">
          <Label htmlFor="inputPassword4">Senha</Label>
          <Input type="password" className="form-control" id="inputPassword4" placeholder="Senha" />
        </FormGroup>
      </div>
      <FormGroup className="form-group">
        <div className="form-check">
          <CheckBox className="form-check-input" type="checkbox" id="gridCheck" />
          <Label className="form-check-label" htmlFor="gridCheck">
            Clique em mim
          </Label>
        </div>
      </FormGroup>
      <Button type="submit" className="btn btn-primary">Entrar</Button>
    </Form>
    <Footer/>
    </>
  );
}
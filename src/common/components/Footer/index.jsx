import { Outlet } from "react-router-dom";
import "./footer.css";
import { Container, Contatos, Participantes, NewsLetter } from "./style";

export function Footer() {
  return (
    <Container>
      <Outlet />
      <Participantes>
        <h3>Desenvolvedores</h3>
        <ul>
          <li>
            <img
              src="https://avatars.githubusercontent.com/u/127349167?v=4"
              alt="Foto Mariane"
            />
            <div>
              <a href="https://github.com/MarianeSMagalhaes">Mariane Santos</a>
            </div>
          </li>
          <li>
            <img
              src="https://avatars.githubusercontent.com/u/127349333?v=4"
              alt="Foto Isabel"
            />
            <div>
              <a href="https://github.com/isabeldefreitas">Isabel de Freitas</a>
            </div>
          </li>
          <li>
            <img
              src="https://avatars.githubusercontent.com/u/127329662?v=4"
              alt="Foto Larissa"
            />
            <div>
              <a href="https://github.com/larissrosa">Larissa Rosa</a>
            </div>
          </li>
          <li>
            <img
              src="https://avatars.githubusercontent.com/u/127352528?v=4"
              alt="Foto Luis"
            />
            <div>
              <a href="https://github.com/lf-hammes">Luis Felipe</a>
            </div>
          </li>
          <li>
            <img
              src="https://avatars.githubusercontent.com/u/127349318?v=4"
              alt="Foto Luiz Otávio"
            />
            <div>
              <a href="https://www.github.com/luizitosuares">Luiz Otávio</a>
            </div>
          </li>
        </ul>
      </Participantes>
      <Contatos>
        <h3>Contatos</h3>
        <p>Telefone: (24) 2222-22222</p>
        <p>
          Email: <a href="hardwareTech@email.com">HardwareTech</a>
        </p>
        <div className="redes"></div>
      </Contatos>
      <NewsLetter>
        <h3>Se inscreva na nossa newsletter:</h3>
        <form action="#">
          <input
            type="email"
            name="email"
            placeholder="Deixe seu melhor e-mail"
          />
          <button>Enviar</button>
        </form>
      </NewsLetter>
    </Container>
  );
}

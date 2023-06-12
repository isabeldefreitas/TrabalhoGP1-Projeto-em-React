import { Outlet } from "react-router-dom"
import "./footer.css"

export function Footer() {
    return (
        <>
            <Outlet />
            <div className="participantes">
                <h3>Desenvolvedores</h3>
                <ul>
                    <li>
                        <img src="https://avatars.githubusercontent.com/u/127349111?v=4" alt="Foto Cristian" />
                        <div><a href="https://github.com/CrystianKelmer">Luis</a></div>
                    </li>
                    <li>
                        <img src="https://avatars.githubusercontent.com/u/127349167?v=4" alt="Foto Mariane" />
                        <div><a href="https://github.com/MarianeSMagalhaes">Mariane Santos</a></div>
                    </li>
                    <li>
                        <img src="https://media.licdn.com/dms/image/C4D03AQFdqBoduagqdA/profile-displayphoto-shrink_200_200/0/1660261926494?e=1688601600&v=beta&t=A2YEC5nppaXwjuiVA0TYr01uMgBkTXCENjrGhUNUMhg" alt="Foto Luiz Otávio" />
                        <div><a href="https://www.github.com/luizitosuares">Luiz Otávio</a></div>
                    </li>
                    <li>
                        <img src="https://avatars.githubusercontent.com/u/127349333?v=4" alt="Foto de Isabel" />
                        <div><a href="https://github.com/isabeldefreitas">Isabel de Freitas</a></div>
                    </li>
                </ul>
            </div>
            <div className="contatos">
                <h3>Contatos</h3>
                <p>Telefone: (24) 2222-22222</p>
                <p>Email: <a href="hardwareTech@email.com">HardwareTech</a></p>
                <div className="redes">
                   
                </div>
            </div>
            <div className="newsletter">
                <h3>Se inscreva na nossa newsletter:</h3>
                <form action="#">
                    <input type="email" name="email" placeholder="Deixe seu melhor e-mail" />
                    <button>Enviar</button>
                </form>
            </div>
        </>
    )
}
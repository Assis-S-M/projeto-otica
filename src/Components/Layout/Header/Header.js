import Style from "./Header.module.css";
import logoPng from "../../assets/assets/imagens/logo.png"

import { Link } from "react-router-dom";

import { Img } from "../../Extras/Img/Img"; 

export const Header = () => {
    return (
        <div className={Style.container}>
            <div className={Style.logoContainer}>
                <Link to="/"><Img src={logoPng} alt="Logo empresarial de: Óticas vida" className="logoImg" /></Link>
            </div>

            <div className={Style.linksContainer} >
                    <a href="#showcase">Produtos</a>
                    <a href="#about">Sobre</a>
                    <a href="#contacts">Contato</a>
            </div>
        </div>
    )
}
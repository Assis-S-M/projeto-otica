import capaPng from "../../assets/assets/imagens/capa.png"
import oculos1 from "../../assets/assets/imagens/oculos01.png"
import oculos2 from "../../assets/assets/imagens/oculos02.png"
import oculos3 from "../../assets/assets/imagens/oculos03.png"
import oculos4 from "../../assets/assets/imagens/oculos04.png"
import atendimento from "../../assets/assets/imagens/atendimento.png"
import loja from "../../assets/assets/imagens/loja.png"
import Styles from "./Home.module.css"

import { Img } from "../../Extras/Img/Img"
import { Text } from "../../Extras/Text/Text"
import { List } from "../../Layout/List/List"
import { ShowcaseCard } from "../../Layout/ShowcaseCard/ShowcaseCard"
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'
import { FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

export const Home = () => {
    return (
        <>
            <div className={Styles.mainContainer}>
                <Img src={capaPng} alt="Capa de site com um homem e uma mulher com óculos" />
                <div className={Styles.textContainer}>
                    <Text color="white" fontSize="30px" fontWeight="400">Preços baixos em</Text>
                    <Text color="white" fontSize="50px" fontWeight="800" boxWidth="350px">ÓCULOS DE GRAU E DE SOL</Text>
                    <Text color="white" fontSize="30px" fontWeight="400">Você só encontra aqui</Text>
                </div>

                <div className={Styles.showcaseContainer} id="showcase">
                    <Text color="black" fontSize="40px" fontWeight="1000">NOSSOS PRODUTOS</Text>
                    <Text color="black" fontSize="15px" fontWeight="400">Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</Text>
                    <Text color="black" fontSize="15px" fontWeight="400">Todos os nossos preços são acessiveis e contam com a melhor qualidade do mercado.</Text>

                    <div className={Styles.showcaseItens}>
                        <ShowcaseCard>
                            <Text color="black" fontSize="30px" fontWeight="1000">Óculos de grau</Text>
                            <Img src={oculos1} />
                            <Text color="black" fontSize="30px" fontWeight="1000" format="R$">500,00</Text>
                        </ShowcaseCard>
                        <ShowcaseCard>
                            <Text color="black" fontSize="30px" fontWeight="1000">Óculos transition</Text>
                            <Img src={oculos2} />
                            <Text color="black" fontSize="30px" fontWeight="1000" format="R$">750,00</Text>
                        </ShowcaseCard>
                        <ShowcaseCard>
                            <Text color="black" fontSize="30px" fontWeight="1000">Óculos de sol</Text>
                            <Img src={oculos3} />
                            <Text color="black" fontSize="30px" fontWeight="1000" format="R$">700,00</Text>
                        </ShowcaseCard>
                        <ShowcaseCard>
                            <Text color="black" fontSize="30px" fontWeight="1000">Óculos infantil</Text>
                            <Img src={oculos1} />
                            <Text color="black" fontSize="30px" fontWeight="1000" format="R$">500,00</Text>
                        </ShowcaseCard>
                    </div>

                        <Text color="black" fontSize="15px" fontWeight="400">Todos os nossos produtos incluem:</Text>
                        <List listType="ul" listItems={["Garantia de 1 ano", "Manutenção preventiva", "Descontos especiais na compra da segunda unidade", "Flexibilidade de pagamento"]} />
                    </div>

                <div className={Styles.whoWeAreContainer} id="about">
                    <Text color="black" fontSize="40px" fontWeight="1000">QUEM SOMOS NÓS</Text>
                    <Text color="black" fontSize="15px" fontWeight="400" boxWidth="1000px">Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao client bom atendimento, qualidade e preço baixo
                    </Text>

                    <div className={Styles.whoWeAreImgs}>
                        <Img src={loja} />
                        <div>
                            <Text color="black" fontSize="35px" fontWeight="1000">NOSSAS FILIAIS</Text>
                            <Text color="grey" fontSize="20px" fontWeight="400" boxWidth="400px">Hoje temos mais de 20 filiais pelo Brasil e na América</Text>
                        </div>
                        <div>
                            <Text color="black" fontSize="35px" fontWeight="1000">ATENDIMENTO FLEXÍVEL</Text>
                            <Text color="grey" fontSize="20px" fontWeight="400" boxWidth="400px">Nossa possui treinamento para te atender</Text>
                        </div>
                        <Img src={atendimento} />
                    </div>
                </div>

                <div className={Styles.footer} id="contacts">
                    <Text color="white" fontSize="40px" fontWeight="1000" boxHeight="10px">FALE CONOSCO</Text>
                    <Text color="white" fontSize="15px" fontWeight="400" boxWidth="1000px">Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</Text>

                    <div className={Styles.contacts}>
                        <div className={Styles.contactNumber}>
                            <Text color="white" fontSize="15px" fontWeight="800">Contato</Text>
                            <Text color="white" fontSize="15px" fontWeight="400" ><MdLocationOn color="white" />Nova Iguaçu, RJ</Text>
                            <Text color="white" fontSize="15px" fontWeight="400" ><BsFillTelephoneFill color="white" />(21) 9999-9999</Text>
                            <Text color="white" fontSize="15px" fontWeight="400" ><MdEmail color="white" />contato@oticavida.com</Text>
                        </div>
                        <div className={Styles.socials}>
                            <Text color="white" fontSize="15px" fontWeight="800">Nossas redes sociais</Text>
                            <Text color="white" fontSize="15px" fontWeight="400" ><AiFillFacebook color="white" />/OticaVida</Text>
                            <Text color="white" fontSize="15px" fontWeight="400" ><FaInstagramSquare color="white" />@oticavidarj</Text>
                            <Text color="white" fontSize="15px" fontWeight="400" ><FaTwitterSquare color="white" />@oticavidarj</Text>
                        </div>
                    </div>

                    <div className={Styles.copyright}>
                        <Text color="grey" fontSize="15px" fontWeight="400" >@ Assis Santos Menezes. - Todos os direitos reservados</Text>
                    </div>
                </div>
            </div>
        </>
    ); 
}
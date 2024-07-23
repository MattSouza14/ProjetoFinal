import footerLogo from '../assets/footerLogo.png'
import footerFace from'../assets/footerFacebook.png'
import footerInsta from'../assets/footerInsta.png'
import footerTwitter from'../assets/footerTwitter.png'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Cores } from './Cores'


let StyledFooter = styled.div`

  /*Fontes*/
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
  /*Fontes*/
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Inter", sans-serif;
  }
  :root {
    font-size: 62.5%;
  }
  

  background-color: ${Cores.darkGray};
  color: ${Cores.white};
  width: 100%;
  height: 454px;

  .footer-info{
    display: flex;
    align-items: center;
  }
  .footer-brand{
    padding: 72px 205px 95px 100px;

  }
  .footer-brand h1 {
    align-items: center;
    margin: 0;
    font-size: 36px;
  }
  .footer-brand .logo{
    align-self: center;
    width: 33px;
    height: 33px;
  }
  .footer-brand p {
    width: 307px;
    margin: 40px 0;
    line-height: 26px;
    font-size: 16px;
  }
  .footer-logo{
    display: flex;
    gap: 8px;
  }
  .social-links ul{
    display:flex;
    padding: 0 0;
    margin: 0;
    gap: 35px;
    text-decoration: none;
  }
  .list-group-informations  h2{
    line-height: auto;
    font-size: 18px;
    margin: auto auto 28px auto;
  }
  .list-group-departments h2{
    line-height: auto;
    font-size: 18px;
    margin: auto auto 28px auto;
  }
  .list-group-informations {
    margin: 72px 102px 34px 0;
    padding: 0;
    font-size: 16px;
    line-height: 38px;
  }
  .list-group-informations  a{
    text-decoration: none;
    color: ${Cores.white};
  }
  .list-group-departments a {
    text-decoration: none;
    color: ${Cores.white};
  }
  .list-group-departments{
    margin: 72px 168px 72px 0;
    padding: 0;
    font-size: 16px;
    line-height: 38px;
  }
  .list-group-contact{
    width: 233px;
    margin: 72px 94px 144px 0;
    padding: 0;
  }
  .list-group-contact h2 {
    font-size: 18px;
    margin: auto auto 28px auto;
  }
  .list-group-contact li{
    font-size: 16px;
  }
  .list-group-contact .adress{
    width: 231px;
    margin: auto auto 14px auto;
    font-size: 16px;
    line-height: 26px;
  }
  .line{
    width: 1240px;
    margin: 0 100px;
    border: 1px solid ${Cores.white};
  }
  h3 {
    font-size: 13px;
    text-align: center;
    margin: 24px 618px 0;
  }

`
export default function Footer(){

return(
    <StyledFooter>
        <div className="footer-info">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={footerLogo} alt="Logo Digital Store" className="logo"/>
                <h1>Digital Store</h1>
              </div>
              <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

              </div>
                <div className="social-links">
                    <ul>
                        <li><a href="#"><img src={footerFace} alt="Icone Facebook"/></a></li>
                        <li><a href="#"><img src={footerInsta} alt="Icone Instagram"/></a></li>
                        <li><a href="#"><img src={footerTwitter} alt="Icone Twitter"/></a></li>
                    </ul>

                </div>
            </div>
            <ul className="list-group-informations">
              <h2>Informação</h2>
              <li><a href="#">Sobre Drip Store</a></li>
              <li><a href="#">Segurança</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
              <li><a href="#">Meus Pedidos</a></li>
            </ul> 

            <ul className="list-group-departments">
              <h2>Categorias</h2>
              <li><a href="#">Camisetas</a></li>
              <li><a href="#">Calças</a></li>
              <li><a href="#">Bonés</a></li>
              <li><a href="#">Headphones</a></li>
              <li><NavLink to={"/ProductListing"}>Tênis</NavLink></li>
            </ul> 
            <ul className="list-group-contact">
              <h2>Contato</h2>
              <li className="adress">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</li>
              <li>(85) 3051-3411</li>
            </ul>

        </div>
        <div className="line"></div>
        <h3>@ 2022 Digital College</h3>
    </StyledFooter>
)
}
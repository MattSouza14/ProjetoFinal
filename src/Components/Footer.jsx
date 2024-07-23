import footerLogo from '../assets/footerLogo.png'
import footerFace from'../assets/footerFacebook.png'
import footerInsta from'../assets/footerInsta.png'
import footerTwitter from'../assets/footerTwitter.png'
import { NavLink } from 'react-router-dom'




export default function Footer(){

return(
    <footer>
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
    </footer>
)
}
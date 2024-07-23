import Buttons from "./Buttons"
import { Cores } from "./Cores"
import '../assets/White-Sneakers-PNG-Clipart2.png'
import '../Components/Gallery.css'
import whiteSneakrs from  '../assets/White-Sneakers.jpg'
import whiteSneakrs2 from '../assets/White-Sneakers2.jpg'
import whiteSneakrs3 from '../assets/White-Sneakers3.jpg'
import whiteSneakrs4 from '../assets/White-Sneakers4.jpg'
import whiteSneakrs5 from '../assets/White-Sneakers5.jpg'
import{NavLink, Link, useLocation} from 'react-router-dom'
import ProductViewPage from '../pages/HomePage.jsx'








export default function Gallery() {
  


    return(

      <main>
         <nav class="nav-main">
            <ul class="ordem-main">
             
                <Link class="item-main" onClick={ProductViewPage}><a href="#">Home</a></Link>
                <li class="item-main"><a href="#">/</a></li>
                <li class="item-main"><a href="#">Produtos</a></li>
                <li class="item-main"><a href="#">/</a></li>
                <li class="item-main"><a href="#">Tênis</a></li>
                <li class="item-main"><a href="#">/</a></li>
                <li class="item-main"><a href="#">Nike</a></li>
                <li class="item-main"><a href="#">/</a></li>
                <li class="item-main"><a href="#">Tênis Nike Revolution 6 Next Nature Masculino</a></li>
            </ul>
        </nav>
          <div className="d-flex">
        <div>
            <div id="carouselExampleControls " className="carousel slide Galeria" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={whiteSneakrs}  alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={whiteSneakrs2}  alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={whiteSneakrs3}  alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={whiteSneakrs4} alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={whiteSneakrs5} alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="div2">
                <Buttons type={"BannerButton"} color={Cores.bannerButton1} />
                <Buttons type={"BannerButton"} color={Cores.bannerButton2} />
                <Buttons type={"BannerButton"} color={Cores.bannerButton3} /> 
                <Buttons type={"BannerButton"} color={Cores.bannerButton4} />
                <Buttons type={"BannerButton"} color={Cores.bannerButton5} />

               
              </div>

        </div>
        
        
          
         
    </div>

      </main>
        
           
    
      
      
        



    )
}

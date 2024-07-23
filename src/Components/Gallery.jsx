import Buttons from "./Buttons"
import { Cores } from "./Cores"
import '../assets/White-Sneakers-PNG-Clipart2.png'
import '../Components/Gallery.css'
import '../assets/White-Sneakers.jpg'
import '../assets/White-Sneakers2.jpg'
import '../assets/White-Sneakers3.jpg'
import '../assets/White-Sneakers4.jpg'
import '../assets/White-Sneakers5.jpg'
import{NavLink, Link, useLocation} from 'react-router-dom'
import ProductViewPage from '../pages/HomePage.jsx'







export default function Gallery() {
  


    return(

      <main>
         <nav class="nav-main">
            <ul class="ordem-main">
             
                <li class="item-main"><a href="#">Home</a></li>
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
                    <img src='src/assets/White-Sneakers.jpg'  alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src='src/assets/White-Sneakers2.jpg'  alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src='src/assets/White-Sneakers3.jpg'  alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src='src/assets/White-Sneakers4.jpg' alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src='src/assets/White-Sneakers5.jpg' alt="..."/>
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

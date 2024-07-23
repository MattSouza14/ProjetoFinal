import Buttons from "./Buttons"
import { Cores } from "./Cores"
import whiteSneakersClip from '../assets/White-Sneakers-PNG-Clipart2.png'
import whiteSneakers from '../assets/White-Sneakers.jpg'
import whiteSneakers2 from '../assets/White-Sneakers2.jpg'
import whiteSneakers3 from '../assets/White-Sneakers3.jpg'
import whiteSneakers4 from '../assets/White-Sneakers4.jpg'
import whiteSneakers5 from '../assets/White-Sneakers5.jpg'
import{NavLink, Link, useLocation} from 'react-router-dom'
import ProductViewPage from '../pages/HomePage.jsx'
import styled from "styled-components"

let StyledGallery = styled.div`

  main{
  background-color:  #FFFFFF;
  margin-bottom: 30px;

  }
  .nav-main {
  padding-top: 20px;
  }

  .ordem-main {
  display: flex;
  list-style-type: none;
  margin-left: 80px;
  background-color:  #FFFFFF;;  
  }

  .item-main a{
  color: ${Cores.darkGray2};
  font-size: 14px;
  padding: 0 10px 0 0;
  text-decoration: none;


  }

  .item-main a:hover {
  font-weight: 600;
  }


  .Galeria{
  width: 700px;
  height: 570px;
  border-radius: 4px;
  background-color: rgba(226, 227, 255, 1);
  border: 2px;
  border-color: ${Cores.darkGray2};
  margin-left: 100px;


  }

  .imagem{
  width: 83.8px;
  height: 41.7px;
  border-radius: 4px;
  }


  .div2{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 100px;
  }
  .product{
  margin-top: 1041px;
  }

`

export default function Gallery() {
  
    return(

      <StyledGallery>
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
                    <img src={whiteSneakers}  alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={whiteSneakers2}  alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={whiteSneakers3}  alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={whiteSneakers4} alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={whiteSneakers5} alt="..."/>
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

      </StyledGallery>
    )
}

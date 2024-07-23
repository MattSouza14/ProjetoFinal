import './ProductCard.css'
import { Link } from 'react-router-dom'
export default function ProductCard({desconto, imagem, nome, descricao, price, priceDiscount}){
    return(
     
         
         <div className="products-grid">
            <div className="card-container">
                <div className ="image-container">
                 {desconto == undefined? <h3 className="overflow empty">{desconto}</h3>:<h3 className="overflow">{desconto}</h3>}
              <Link to={"/ProductView"}>
                  <img
                    src={imagem}
                    alt="Tênis"
                    className="img"
                    onClick="src\pages\ProductViewPage.jsx"
                  />
                </Link>
                </div>
                <div className="description">
                  <h4 className="title">{nome}</h4>
                  <p className="descricao">{descricao}</p>
                  <p className="price">
                    {desconto == undefined? <span className="price normal">{price}</span>:<span className="price"><s>{price}</s></span>}
                    <span className="priceDiscount">{priceDiscount}</span>
                  </p>
                </div>
              </div>
              
              
            </div>
       
       
   
    )
}
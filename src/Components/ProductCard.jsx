import '../assets/tenisCardUm.png'
import './ProductCard.css'

export default function ProductCard({desconto, imagem, nome, descricao, price, priceDiscount}){
    return(
     
          /*Arrumar corretamente a renderização*/ 
         <div className="products-grid">
            <div className="card-container">
                <div className ="image-container">
                 {desconto == undefined? null:<h3 className="overlay">{desconto}</h3>}
                  <img
                    src={imagem}
                    alt="Tênis"
                    className="img"
                  />
                </div>
                <div className="description">
                  <h4 className="title">{nome}</h4>
                  <p className="descricao">{descricao}</p>
                  <p className="price">
                    <span className="price"><s>{price}</s></span>
                    <span className="priceDiscount">{priceDiscount}</span>
                  </p>
                </div>
              </div>
              
              
            </div>
       
       
   
    )
}
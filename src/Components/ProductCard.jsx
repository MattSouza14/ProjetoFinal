import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

let StyledProductCard = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
}
:root {
    font-size: 62.5%;
}
.products-grid{
    display: grid;
    grid-template-columns: 292px 292px 292px;

    gap: 14px;
    margin-top: 40px;
}
.desconto{
    position: relative;
    top: 20px;
    left: 20px;

    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.75px;
    font-weight: bold;
}
.card-container{
    width: 292px;
    height: 439px;
    box-shadow: rgba(0, 0, 0, 0.3);
    
}
.image-container{
    background-color: var(--white);
    width: 292px;
    height: 321px;
}
.image-container img {
    margin: -40px 20px 42px -26px;
}
.overlay {
    width: 96px;
    height: 32px;

    position: relative;
    top: 20px;
    left: 20px;
    z-index: 1;

    background: #E7FF86;
    color:var(--dark-gray-2);

    padding: 5px 15px;

    border-radius: 29px;
    font-size: 14px;
    line-height: 22px;
    font-weight: bold;
}
.overlay.empty {
    visibility: hidden; 
}
.title{
    font-size: 12px;
    font-weight: bold;
    line-height: 24px;
    color: var(--light-gray);
    margin: 18px 0 0 0;
    letter-spacing: 0.75px;
}

.descricao {
    font-size: 24px;
    color: var(--dark-gray-2);
    line-height: 24px;
    letter-spacing: 0.75px;
   

}
.priceDiscount{
    font-size: 24px;
    color: var(--dark-gray);
    line-height: 38px;
    font-weight: bold;
    letter-spacing: 0.75px;
}
.price{
    font-size: 24px;
    color: var(--light-gray);
    line-height: 38px;
    letter-spacing: 0.75px;
    margin-right: 8px;
}

.price.normal{
    color: var(--dark-gray);
    font-weight: bold;
}
`

export default function ProductCard({desconto, imagem, nome, descricao, price, priceDiscount}){
    return(
        <StyledProductCard>
         <div className="products-grid">
            <div className="card-container">
                <div className ="image-container">
                 {desconto == undefined? <h3 className="overlay empty">{desconto}</h3>:<h3 className="overlay">{desconto}</h3>}
              <NavLink to={"/ProductView"}>
                  <img
                    src={imagem}
                    alt="Tênis"
                    className="img"
                    onClick="src\pages\ProductViewPage.jsx"
                  />
                </NavLink>
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
            </StyledProductCard>
    )
}
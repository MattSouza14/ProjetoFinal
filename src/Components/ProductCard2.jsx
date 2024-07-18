import '../assets/tenisCardUm.png'

export default function ProductCard2({ imagem, nome, descricao, oldPrice, newPrice}){
    return(
     
        
         <div className="products-grid">
            <div className="card-container">
                <div className ="image-container">
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
                    <span className="price"><s>{oldPrice}</s></span>
                    <span className="priceDiscount">{newPrice}</span>
                  </p>
                </div>
              </div>
              
              
            </div>
       
       
   
    )
}
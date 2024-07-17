import '../assets/tenisCardUm.png'

export default function ProductCard({desconto, imagem, nome, descricao, oldPrice, newPrice}){
    return(
     
        <section id="products">    
         <div className="products-grid">
            <div className="card-container">
                <div className ="image-container">
                 <h3 className="overlay">{desconto}</h3>
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
       </section> 
       
   
    )
}




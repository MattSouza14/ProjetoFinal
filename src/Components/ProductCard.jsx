import '../assets/tenisCardUm.png'
export default function ProductCard(desconto, imagem, nome, descricao, oldPrice, newPrice){
    return(
       <section id="products">    
         <div class="products-grid">
            <div class="card-container">
                <div class="image-container">
                 <h3 class="overlay">{desconto}</h3>
                  <img
                    src={imagem}
                    alt="Tênis"
                    class="img"
                  />
                </div>
                <div class="description">
                  <h4 class="title">{nome}</h4>
                  <p class="descricao">{descricao}</p>
                  <p class="price">
                    <span class="old-price"><s>${oldPrice}</s></span>
                    <span class="desconto">${newPrice}</span>
                  </p>
                </div>
              </div>
            </div>
       </section>
   
      
    )
}


import '../assets/tenisCardUm.png'
function ProdutosCard(){
    return(
       <section id="products">    
         <div class="products-grid">
            <div class="card-container">
                <div class="image-container">
                 <h3 class="overlay">30% OFF</h3>
                  <img
                    src="src\assets\tenisCardUm.png"
                    alt="imagem"
                    class="img"
                  />
                </div>
                <div class="description">
                  <h4 class="title">Tênis</h4>
                  <p class="descricao">K-Swiss V8 - Masculino</p>
                  <p class="price">
                    <span class="old-price"><s>$200</s></span>
                    <span class="desconto">$100</span>
                  </p>
                </div>
              </div>
            
              
              <div class="card-container">
                <div class="image-container">
                  <img
                    src="src\assets\tenisCardUm.png"
                    alt="imagem"
                    class="img"
                  />
                </div>
                <div class="description">
                  <h4 class="title">Tênis</h4>
                  <p class="descricao">K-Swiss V8 - Masculino</p>
                  <p class="price">
                    <span class="old-price"><s>$200</s></span>
                    <span class="desconto">$100</span>
                  </p>
                </div>
              </div>
            </div>
            
            
             
            

       </section>
        
    )
}

export default ProdutosCard
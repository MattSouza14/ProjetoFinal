import '../assets/tenisCardUm.png'
function ProductCard(nome, imagem, descricao, precoAntigo, precoNovo, desconto){
    return(
      <main>
 <section id="products">    
         <div class="products-grid">
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
        
      </main>
      
    )
}

export default ProductCard
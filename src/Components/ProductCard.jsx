import '../assets/tenisCardUm.png'



export default function ProductCard({nome, imagem, descricao, precoAntigo, precoNovo, desconto}){
    return(
    <main>
        <section id="products">    
         <div className="products-grid">
            <div className="card-container">
                <div className="image-container">
                 <div className="desconto">{desconto}</div>
                  <img
                    src={imagem}
                    alt={nome}
                    class="img"
                  />
                </div>
                <div className="description">
                  <h4 className="title">{nome}</h4>
                  <p className="descricao">{descricao}</p>
                  <p className="price">
                    <span className="old-price"><s>{precoAntigo}</s></span>
                    <span className="new-price">{precoNovo}</span>
                  </p>
                </div>
              </div>
            
              <div className="card-container">
                <div className="image-container">
                  <img
                    src={imagem}
                    alt={nome}
                    className="img"
                  />
                </div>
                <div className="description">
                  <h4 className="title">{nome}</h4>
                  <p className="descricao">{descricao}</p>
                  <p className="price">
                    <span className="old-price"><s>{precoAntigo}</s></span>
                    <span className="desconto">{precoNovo}</span>
                  </p>
                </div>
              </div>
            </div>
       </section>
    </main>
      
    )
}


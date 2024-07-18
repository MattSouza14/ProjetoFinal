import ProductCard from "./ProductCard";
import ProductCard2 from "./ProductCard2";

import './ProductCard.css'




export default function ListProductCard({produtos}) {
  if(produtos.desconto){
    return (
      <section id="products">
            <div className="products-grid">
      
            {produtos.map((produto, index) => (
              <ProductCard key={index} nome={produto.nome} descricao={produto.descricao} desconto={produto.desconto} oldPrice={produto.oldPrice} newPrice={produto.newPrice} imagem={produto.imagem}/>
            ))}
            </div>
          </section>
       
      );
    
  }else{
    return (
      <section id="products">
            <div className="products-grid">
      
            {produtos.map((produto, index) => (
              <ProductCard2 key={index} nome={produto.nome} descricao={produto.descricao} oldPrice={produto.oldPrice} newPrice={produto.newPrice} imagem={produto.imagem}/>
            ))}
            </div>
          </section>
       
      );


  }
  }
  
  
  {/* {produtosNoDiscount.map((produtoSemDesconto, index) => (
    <ProductCard2 key={index} nome={produtoSemDesconto.nome} descricao={produtoSemDesconto.descricao}  oldPrice={produtoSemDesconto.oldPrice} newPrice={produtoSemDesconto.newPrice} imagem={produtoSemDesconto.imagem}/>
    ))} */}
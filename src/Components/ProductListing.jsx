import ProductCard from "./ProductCard";
import ProductCard2 from "./ProductCard2";

import './ProductCard.css'

 
    
    
export default function ProductListing({produtos}) {
  if(produtos.desconto !== undefined){
    return (
     
            <div className="products-grid">
      
            {produtos.map((produto, index) => (
              <ProductCard key={index} nome={produto.nome} descricao={produto.descricao} desconto={produto.desconto} oldPrice={produto.oldPrice} newPrice={produto.newPrice} imagem={produto.imagem}/>
            ))}
            </div>
      );
    
  }else{
    return (
     
            <div className="products-grid">
      
            {produtos.map((produto, index) => (
              <ProductCard2 key={index} nome={produto.nome} descricao={produto.descricao} oldPrice={produto.oldPrice} newPrice={produto.newPrice} imagem={produto.imagem}/>
            ))}
            </div>
          
       
      );


  }
  }
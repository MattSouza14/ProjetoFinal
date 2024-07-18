import ProductCard from "./ProductCard";
import ProductCard2 from "./ProductCard2";

import './ProductCard.css'

// export default function ListProductCard({produtos}){

//      return(
//             <div className="products-grid">

//                 {produtos.map((produto) =>(
//                     <ProductCard nome={produto.nome} descricao={produto.descricao} desconto={produto.desconto} oldPrice={produto.oldPrice} newPrice={produto.newPrice} imagem={produto.imagem}/>
//                 ))}
//             </div>
//         )
//     }   
    
    
export default function ListProductCard({ produtos =[], produtosNoDiscount =[] }) {
    return (
      
        <section id="products">
          <div className="products-grid">
    
          {produtos.map(produto => (
            <ProductCard nome={produto.nome} descricao={produto.descricao} desconto={produto.desconto} oldPrice={produto.oldPrice} newPrice={produto.newPrice} imagem={produto.imagem}/>
          ))}
          {produtosNoDiscount.map(produtoSemDesconto => (
            <ProductCard2 nome={produtoSemDesconto.nome} descricao={produtoSemDesconto.descricao}  oldPrice={produtoSemDesconto.oldPrice} newPrice={produtoSemDesconto.newPrice} imagem={produtoSemDesconto.imagem}/>
          ))}
          </div>
        </section>
     
    );
  }


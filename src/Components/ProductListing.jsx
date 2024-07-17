import ProductCard from "./ProductCard";

import './ProductCard.css'

export default function ListProductCard({produtos}){

     return(
            <div className="products-grid">

                {produtos.map((produto) =>(
                    <ProductCard nome={produto.nome} descricao={produto.descricao} desconto={produto.desconto} oldPrice={produto.oldPrice} newPrice={produto.newPrice} imagem={produto.imagem}/>
                ))}
            </div>
        )
    }   
    
    
    

    //    if(produtos.desconto){ 
//    } 
//    else {
//     return(
//             <div className="products-grid">

//                 {produto2.map((produto2) =>(
//                     <ProductCard2 nome={produto2.nome} descricao={produto2.descricao} oldPrice={produto2.oldPrice} newPrice={produto2.newPrice} imagem={produto2.imagem}/>
//                 ))}
//             </div>

//     )
    
        
   
// }
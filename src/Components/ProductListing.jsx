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
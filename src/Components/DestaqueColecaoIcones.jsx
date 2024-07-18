
import CardDestaque from "./CardDestaque"
export default function DistaqueColecaoIcones({ListaProdutos}){
    return(

        <div>
            {ListaProdutos.map((produto, index)=> 
            <div key={index}>
                <img src={produto.imagem} alt={produto.nome} />
                <h1>Colecao Adidas</h1>
                <button>Comprar</button>
            </div>
            )}
        </div>

    )
}


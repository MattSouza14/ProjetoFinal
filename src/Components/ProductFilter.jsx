import './ProductFilter.css'
import '../assets/setaProdutos.png'
export default function ProductFilter(){
return(
<div className="containerFilter">
    <div className="results">
        <p><span className="text">Resultados para “Tênis” -</span> 389 produtos</p>
    </div>
    <div className="containerSelect">
      <p><span className="text">Ordernar por: </span>mais relevantes <span><img src="src\assets\setaProdutos.png" alt=""  className='imgSeta'/></span></p>
    </div>
</div>

)
}
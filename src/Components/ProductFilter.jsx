import './ProductFilter.css'
export default function ProductFilter(){
return(
<div className="containerFilter">
    <div className="results">
        <p><span className="text">Resultados para “Tênis” -</span> 389 produtos</p>
    </div>
    <div className="containerSelect">
        <form action="">
        <select name="" id="" className="selectContainer">
            <option value="" className='optionContainer'>Ordernar por: mais relevantes</option>
        </select>
        </form>
    </div>
</div>

)
}
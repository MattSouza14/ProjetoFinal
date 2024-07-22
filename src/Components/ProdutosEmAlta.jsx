import ProductCard3 from "./ProductCard3"
import styled from "styled-components"
import { Cores } from "./Cores"
import "/src/assets/right24px.png"
import { Link } from "react-router-dom"

let StyledTitle = styled.div`

margin-right: 190px;
   display: flex;
   justify-content: space-between;
   h1 {
      font-weight: bold;
      color: ${Cores.darkGray2};
      margin-left: 90px;
   }
   a {
      color: ${Cores.primary};
      font-weight: 400;
      font-size: 18px;
      text-decoration: none;

      img {
         margin-left: 10px;
      }
   }
`


let StyledProdutosEmAlta = styled.div`

   margin-left: 90px;
   padding-bottom: 130px;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   width: 1235px;
   
`

export default function ProdutosEmAlta({produto=[]}) {
   return (
      <>
      <StyledTitle>
         <h1>Produtos em alta</h1>
         
         <Link to="/ProductListing">Ver todos <img src="\src\assets\Right24px.png" alt=""/></Link>
      </StyledTitle>

      <StyledProdutosEmAlta>
   
         {produto.map((produto, index) => (
            <ProductCard3 key={index} nome={produto.nome} descricao={produto.descricao} desconto={produto.desconto} oldPrice={produto.oldPrice} newPrice={produto.newPrice} imagem={produto.imagem} />)
         )}
      </StyledProdutosEmAlta>
      </>
      
      
   )
}
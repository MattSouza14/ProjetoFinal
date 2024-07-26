import ProductListing from "../Components/ProductListing"
import ProductFilter from "../Components/ProductFilter"
import FilterGroup from "../Components/FilterGroup"
import { produtosContexto } from "../context/Contexto";
import { useContext } from "react";
import styled from "styled-components"

let StyledProductListingPage = styled.div`
  #products{
    display: flex;
    padding: 0 100px 140px 100px;
    gap: 28px;
}
`





export default function ProdructListingPage(){
  const { produtos, setProdutos } = useContext(produtosContexto);
    return(
    <StyledProductListingPage>

    <main style={{backgroundColor: '#F9F8FE'}}>
      <ProductFilter/>
        <section id="products">
         <FilterGroup/>
        <ProductListing produtos={produtos} />
      </section>
    </main>
  
    </StyledProductListingPage>
)

}
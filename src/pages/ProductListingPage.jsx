import ProductListing from "../Components/ProductListing"
import ProductFilter from "../Components/ProductFilter"
import FilterGroup from "../Components/FilterGroup"
import tenisCardUm from'../assets/tenisCardUm.png'
import styled from "styled-components"

let StyledProductListingPage = styled.div`
  #products{
    display: flex;
    padding: 0 100px 140px 100px;
    gap: 28px;
}
`
export default function ProdructListingPage(){
   const produtos = [{
            nome: 'Tênis',
            descricao:'K-Swiss V8 - Masculino',
            price: '$200',
            priceDiscount:'$149.9',
            desconto:'30% OFF',
            imagem: tenisCardUm,
            
          },
          {
            nome: 'Tênis',
            descricao:'K-Swiss V8 - Masculino',
            price: '$200',
            priceDiscount:'$149.9',
            desconto:'30% OFF',
            imagem: tenisCardUm,
            
        
          },
          {
            nome: 'Tênis',
            descricao:'K-Swiss V8 - Masculino',
            price: '$200',
            imagem: tenisCardUm
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          price: '$200',
    
          imagem: tenisCardUm
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          price: '$200',
          
          imagem: tenisCardUm
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          price: '$200',
          
          imagem: tenisCardUm
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          price: '$200',
          
          imagem: tenisCardUm
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          price: '$200',
          
          imagem: tenisCardUm
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          price: '$200',
          
          imagem: tenisCardUm
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          price: '$200',
          
          imagem: tenisCardUm
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          price: '$200',
          
          imagem: tenisCardUm
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          price: '$200',
          
          imagem: tenisCardUm
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          price: '$200',
          
          imagem: tenisCardUm
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          price: '$200',
          
          imagem: tenisCardUm
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          price: '$200',
          
          imagem: tenisCardUm
        }
          
        ]

    return(
    <StyledProductListingPage>

    <main style={{backgroundColor: '#F9F8FE'}}>
      <ProductFilter/>
        <section id="products">
         <FilterGroup/>
        <ProductListing produtos={produtos} onclick="src\pages\ProductViewPage.jsx"/>
      </section>
    </main>
  
    </StyledProductListingPage>
)

}
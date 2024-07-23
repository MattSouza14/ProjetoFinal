import ProductListing from "../Components/ProductListing"
import ProductFilter from "../Components/ProductFilter"
import FilterGroup from "../Components/FilterGroup"
import tenisCardUm from'../assets/tenisCardUm.png'




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
    <>
    <main>
      <ProductFilter/>
      <section id="products">
         <FilterGroup/>
        <ProductListing produtos={produtos} onclick="src\pages\ProductViewPage.jsx"/>
      </section>
    </main>
  
    </>
)

}
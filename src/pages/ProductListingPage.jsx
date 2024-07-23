import ProductListing from "../Components/ProductListing"
import ProductFilter from "../Components/ProductFilter"
import FilterGroup from "../Components/FilterGroup"
import { produtosContexto } from "../context/Contexto";
import { useContext } from "react";
// import tenisCardUm from'../assets/tenisCardUm.png'




export default function ProdructListingPage(){
  //  const produtos = [{
  //           nome: 'Tênis',
  //           descricao:'K-Swiss V8 - Masculino',
  //           price: '$200',
  //           priceDiscount:'$149.9',
  //           desconto:'30% OFF',
  //           imagem: tenisCardUm,
            
  //         },
  //         {
  //           nome: 'Tênis',
  //           descricao:'K-Swiss V8 - Masculino',
  //           price: '$200',
  //           priceDiscount:'$149.9',
  //           desconto:'30% OFF',
  //           imagem: tenisCardUm,
            
        
  //         },
  //         {
  //           nome: 'Tênis',
  //           descricao:'K-Swiss V8 - Masculino',
  //           price: '$200',
  //           imagem: tenisCardUm
  //       },
  //       {
  //         nome: 'Tênis',
  //         descricao:'K-Swiss V8 - Masculino',
  //         price: '$200',
    
  //         imagem: tenisCardUm
  //       },
  //       {
  //         nome: 'Tênis',
  //         descricao:'K-Swiss V8 - Masculino',
  //         price: '$200',
          
  //         imagem: tenisCardUm
  //       },
  //       {
  //         nome: 'Tênis',
  //         descricao:'K-Swiss V8 - Masculino',
  //         price: '$200',
          
  //         imagem: tenisCardUm
  //       },
  //       {
  //         nome: 'Tênis',
  //         descricao:'K-Swiss V8 - Masculino',
  //         price: '$200',
          
  //         imagem: tenisCardUm
  //       },
  //       {
  //         nome: 'Tênis',
  //         descricao:'K-Swiss V8 - Masculino',
  //         price: '$200',
          
  //         imagem: tenisCardUm
  //       },
  //       {
  //         nome: 'Tênis',
  //         descricao:'K-Swiss V8 - Masculino',
  //         price: '$200',
          
  //         imagem: tenisCardUm
  //       },
  //       {
  //         nome: 'Tênis',
  //         descricao:'K-Swiss V8 - Masculino',
  //         price: '$200',
          
  //         imagem: tenisCardUm
  //       },
  //       {
  //         nome: 'Tênis',
  //         descricao:'K-Swiss V8 - Masculino',
  //         price: '$200',
          
  //         imagem: tenisCardUm
  //       },
  //       {
  //         nome: 'Tênis',
  //         descricao:'K-Swiss V8 - Masculino',
  //         price: '$200',
          
  //         imagem: tenisCardUm
  //       },
  //       {
  //         nome: 'Tênis',
  //         descricao:'K-Swiss V8 - Masculino',
  //         price: '$200',
          
  //         imagem: tenisCardUm
  //       },
  //       {
  //         nome: 'Tênis',
  //         descricao:'K-Swiss V8 - Masculino',
  //         price: '$200',
          
  //         imagem: tenisCardUm
  //       },
  //       {
  //         nome: 'Tênis',
  //         descricao:'K-Swiss V8 - Masculino',
  //         price: '$200',
          
  //         imagem: tenisCardUm
  //       }
          
  //       ]
  const { produtos, setProdutos } = useContext(produtosContexto);
    return(
    <>
    <main>
      <ProductFilter/>
      <section id="products">
         <FilterGroup/>
        <ProductListing produtos={produtos} />
      </section>
    </main>
  
    </>
)

}
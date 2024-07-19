
import ProductListing from "../Components/ProductListing"
import ProductFilter from "../Components/ProductFilter"
import FilterGroup from "../Components/FilterGroup"

export default function ProdructListingPage(){
    const produtos = [{
            nome: 'Tênis',
            descricao:'K-Swiss V8 - Masculino',
            oldPrice: '$200',
            newPrice:'$149.9',
            desconto:'%30 OFF',
            imagem: 'src/assets/tenisCardUm.png',
            
          },
          {
            nome: 'Tênis',
            descricao:'K-Swiss V8 - Masculino',
            oldPrice: '$200',
            newPrice:'$149.9',
            desconto:'%30 OFF',
            imagem: 'src/assets/tenisCardUm.png',
            
        
          },
          {
            nome: 'Tênis',
            descricao:'K-Swiss V8 - Masculino',
            oldPrice: '$200',
            newPrice:'$149.9',
            imagem: 'src/assets/tenisCardUm.png'
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          oldPrice: '$200',
          newPrice:'$149.9',
          imagem: 'src/assets/tenisCardUm.png'
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          oldPrice: '$200',
          newPrice:'$149.9',
          imagem: 'src/assets/tenisCardUm.png'
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          oldPrice: '$200',
          newPrice:'$149.9',
          imagem: 'src/assets/tenisCardUm.png'
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          oldPrice: '$200',
          newPrice:'$149.9',
          imagem: 'src/assets/tenisCardUm.png'
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          oldPrice: '$200',
          newPrice:'$149.9',
          imagem: 'src/assets/tenisCardUm.png'
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          oldPrice: '$200',
          newPrice:'$149.9',
          imagem: 'src/assets/tenisCardUm.png'
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          oldPrice: '$200',
          newPrice:'$149.9',
          imagem: 'src/assets/tenisCardUm.png'
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          oldPrice: '$200',
          newPrice:'$149.9',
          imagem: 'src/assets/tenisCardUm.png'
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          oldPrice: '$200',
          newPrice:'$149.9',
          imagem: 'src/assets/tenisCardUm.png'
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          oldPrice: '$200',
          newPrice:'$149.9',
          imagem: 'src/assets/tenisCardUm.png'
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          oldPrice: '$200',
          newPrice:'$149.9',
          imagem: 'src/assets/tenisCardUm.png'
        },
        {
          nome: 'Tênis',
          descricao:'K-Swiss V8 - Masculino',
          oldPrice: '$200',
          newPrice:'$149.9',
          imagem: 'src/assets/tenisCardUm.png'
        }
          
        ]

    return(
    <>
    <main>
      <ProductFilter/>
      <section id="products">
         <FilterGroup/>
        <ProductListing produtos={produtos}/>
      </section>
    </main>
  
    </>
)

}
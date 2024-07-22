import ProdutosRelacionados from "../Components/ProdutosRelacionados"
import BuyBox from "../Components/BuyBox"
import Gallery from "../Components/Gallery"


export default function ProductViewPage(){

    const produtos = [{
        nome: 'Tênis',
        descricao:'K-Swiss V8 - Masculino',
        oldPrice: '$200',
        newPrice:'$149.9',
        desconto:'%30 OFF',
        imagem: 'src/assets/tenisCardUm.png',
        hasDiscount: ''
      },
      {
        nome: 'Tênis',
        descricao:'K-Swiss V8 - Masculino',
        oldPrice: '$200',
        newPrice:'$149.9',
        desconto:'%30 OFF',
        imagem: 'src/assets/tenisCardUm.png',
        hasDiscount: ''
    
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
    }]
    

    return(
        <>

             <div className="d-flex">   
              <Gallery> </Gallery>
              
              <BuyBox
              name={"Tênis Nike Revolution 6 Next Nature Masculino"}
              reference={"Casual | Nike | REF:38416711"}
              pontuacao={4.7}
              rating={45}
              price={279.00}
              priceDiscount={219.00}
              description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae laudantium, accusamus vero esse alias debitis sed autem ad omnis voluptas vitae odit, quasi obcaecati eaque nisi optio illo voluptatem."}
              >
            </BuyBox> 


             </div>
              
            <ProdutosRelacionados produto={produtos}></ProdutosRelacionados>
         
        </>
       
    )
}

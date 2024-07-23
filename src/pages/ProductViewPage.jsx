import ProdutosRelacionados from "../Components/ProdutosRelacionados"
import BuyBox from "../Components/BuyBox"
import Gallery from "../Components/Gallery"
import tenisCardUm from'../assets/tenisCardUm.png'




export default function ProductViewPage(){

    const produtos = [{
        nome: 'Tênis',
        descricao:'K-Swiss V8 - Masculino',
        oldPrice: '$200',
        newPrice:'$149.9',
        desconto:'30% OFF',
        imagem: tenisCardUm 
      },
      {
        nome: 'Tênis',
        descricao:'K-Swiss V8 - Masculino',
        oldPrice: '$200',
        newPrice:'$149.9',
        desconto:'30% OFF',
        imagem: tenisCardUm 
      },
      {
        nome: 'Tênis',
        descricao:'K-Swiss V8 - Masculino',
        oldPrice: '$200',
        newPrice:'$149.9',
        imagem: tenisCardUm 
      },

    {
      nome: 'Tênis',
      descricao:'K-Swiss V8 - Masculino',
      oldPrice: '$200',
      newPrice:'$149.9',
      imagem: tenisCardUm 
    }]
    

    return(
        <div style={{backgroundColor: '#F9F8FE'}}>

             <div className="d-flex">   
            <Gallery></Gallery>              
              <BuyBox
              name={"Tênis Nike Revolution 6 Next Nature Masculino"}
              reference={"Casual | Nike | REF:38416711"}
              pontuacao={4.7}
              rating={"(90 avaliações)"}
              price={279.00}
              priceDiscount={219.00}
              description={<><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quod repudiandae</p><p> laudantium, accusamus vero esse alias debitis
                 sed autem ad omnis </p><p>voluptas vitae odit,quasi obcaecati eaquenisi optio illo voluptatem.</p></>}
              >
            </BuyBox> 
            


             </div>
             <br></br>
              <ProdutosRelacionados produto={produtos}></ProdutosRelacionados>
             
              
            
         
        </div>
       
    )
}

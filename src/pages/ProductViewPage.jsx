import ProdutosRelacionados from "../Components/ProdutosRelacionados"



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
       <ProdutosRelacionados produto={produtos}></ProdutosRelacionados>
    )
}

import BanerPrincipal from "../Components/BanerPrincipal"
import CardDestaque from "../Components/CardDestaque"
import ColecoesDestaque2 from "../Components/ColecoesDestaque2"
import ProdutosEmAlta from "../Components/ProdutosEmAlta"
import TenisJordan from "../Components/TenisJordan"


export default function HomePage(){

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
    }]

    return(
        <>
            <BanerPrincipal></BanerPrincipal>
            <CardDestaque></CardDestaque>
            <ColecoesDestaque2></ColecoesDestaque2>
            <ProdutosEmAlta produto={produtos}></ProdutosEmAlta>
            <TenisJordan></TenisJordan>
        </>
    

    )

}
import styled from "styled-components"
import BanerPrincipal from "../Components/BanerPrincipal"
import CardDestaque from "../Components/CardDestaque"
import ColecoesDestaque2 from "../Components/ColecoesDestaque2"
import ProdutosEmAlta from "../Components/ProdutosEmAlta"

let StyledHomePage = styled.div`

  background-color: #F9F8FE;
`
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
          <StyledHomePage>
            <BanerPrincipal></BanerPrincipal>
            <CardDestaque onclick="src\pages\ProductViewPage.jsx"></CardDestaque>
            <ColecoesDestaque2></ColecoesDestaque2>
            <ProdutosEmAlta produto={produtos} onclick="src\pages\ProductViewPage.jsx"></ProdutosEmAlta>
          </StyledHomePage>
          
        </>
    

    )

}
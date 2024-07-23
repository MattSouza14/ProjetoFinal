import styled from "styled-components"
import BanerPrincipal from "../Components/BanerPrincipal"
import CardDestaque from "../Components/CardDestaque"
import ColecoesDestaque2 from "../Components/ColecoesDestaque2"
import ProdutosEmAlta from "../Components/ProdutosEmAlta"
import Section from "../Components/Section"
import tenisCardUm from'../assets/tenisCardUm.png'


let StyledHomePage = styled.div`

  background-color: #F9F8FE;
`
export default function HomePage(){

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
        <>
          <StyledHomePage>
            <BanerPrincipal></BanerPrincipal>
            <CardDestaque></CardDestaque>
            <ColecoesDestaque2></ColecoesDestaque2>
            <ProdutosEmAlta produto={produtos} onclick="src\pages\ProductViewPage.jsx"></ProdutosEmAlta>
            
          </StyledHomePage>
          <Section  title="Exemplo de Seção"
        titleAlign="center"
        link={{
          text: "Veja mais",
          href: "https://exemplo.com"
        }}></Section>
          
        </>
    

    )

}
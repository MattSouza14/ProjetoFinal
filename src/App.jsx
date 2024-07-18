import { useState } from 'react'
import './index.css'

import Footer from './Components/Footer'
import './Components/Footer.css'

import Header from './Components/Header'

import ProductCard from './Components/ProductCard'
import ProductCard2 from './Components/ProductCard2.jsx'
import './Components/ProductCard.css'

import ProductFilter from './Components/ProductFilter.jsx'

import ProductListing from './Components/ProductListing'
import Buttons from './Components/Buttons'

import ListProductCard from './Components/ProductListing'
import ColecoesDestaque2 from './Components/ColecoesDestaque2'

import BanerPrincipal from './Components/BanerPrincipal.jsx'
import './Components/BarnerPrincipal.css'
import BuyBox from './Components/BuyBox.jsx'




function App() {
  const [count, setCount] = useState(0)

  // <BuyBox
  //   name="Tênis Nike Revolution 6 Next Nature Masculino"
  //   reference="Casual | Nike | REF:38416711"
  //   stars={4.7}
  //   ating={350}
  //   price={219.00}
  //   priceDiscount={279.00}
  //   description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae laudantium, accusamus vero esse alias debitis sed autem ad omnis voluptas vitae odit, quasi obcaecati eaque nisi optio illo voluptatem."
  //   ></BuyBox>

  let produtos = [{
    nome: 'Tênis',
    descricao:'K-Swiss V8 - Masculino',
    oldPrice: '$200',
    newPrice:'$149.9',
    desconto:'%30 OFF',
    imagem: 'src/assets/tenisCardUm.png'
  },
  {
    nome: 'Tênis',
    descricao:'K-Swiss V8 - Masculino',
    oldPrice: '$200',
    newPrice:'$149.9',
    desconto:'%30 OFF',
    imagem: 'src/assets/tenisCardUm.png'
  }
  
  
]
let produtosNoDiscount = [
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
},
]
  

  return (
  <>
    <Header></Header>
    
     <BuyBox
    name={"Tênis Nike Revolution 6 Next Nature Masculino"}
    reference={"Casual | Nike | REF:38416711"}
    stars={4.7}
    ating={350}
    price={219.00}
    priceDiscount={279.00}
    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae laudantium, accusamus vero esse alias debitis sed autem ad omnis voluptas vitae odit, quasi obcaecati eaque nisi optio illo voluptatem."}
    ></BuyBox> 
 
    <ColecoesDestaque2></ColecoesDestaque2>

    <BuyBox></BuyBox>
    <ProductFilter/>
    <ListProductCard produtos={produtos}/>
    <ListProductCard produtosNoDiscount={produtosNoDiscount}/>
    

    <Footer></Footer>
 
      

    </>
  )
}

export default App

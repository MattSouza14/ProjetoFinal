import { useState } from 'react'
import './index.css'

import Footer from './Components/Footer'
import './Components/Footer.css'

import Header from './Components/Header'

import ProductCard from './Components/ProductCard'
import './Components/ProductCard.css'

import ProductListing from './Components/ProductListing'
import Buttons from './Components/Buttons'

import ListProductCard from './Components/ProductListing'
import ColecoesDestaque2 from './Components/ColecoesDestaque2'


function App() {
  // const [count, setCount] = useState(0)

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
  

  return (
  <>
    <Header></Header>
 
    <ColecoesDestaque2></ColecoesDestaque2>

    <ListProductCard produtos={produtos}/>

    <Footer></Footer>
 
    </>
  )
}

export default App

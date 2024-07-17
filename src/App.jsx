import { useState } from 'react'

import Footer from './Components/Footer'
import './Components/Footer.css'

import Header from './Components/Header'
import './Components/header.css'

import Logo from './Components/Logo'
import './Components/Logo.css'

import ProductCard from './Components/ProductCard'
import './Components/ProductCard.css'



function App() {
  const [count, setCount] = useState(0)

  let produto = [{
    nome: 'Tênis',
    descricao:'K-Swiss V8 - Masculino',
    oldPrice: '200',
    newPrice:'100',
    desconto:'30',
    imagem: 'src/assets/tenisCardUm.png'
  }
  ]

  return (
  <>
    <Header></Header>

    <Logo></Logo> 

   <ProdutosCard ></ProdutosCard> 
  
    <Footer></Footer>
 
      

    </>
  )
}

export default App

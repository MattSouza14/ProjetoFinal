import { useState } from 'react'

import Footer from './Components/Footer'
import './Components/Footer.css'

import './App.css'


import Header from './Components/Header'
import './Components/header.css'

import Logo from './Components/Logo'
import './Components/Logo.css'

import ProdutosCard from './Components/ProductCard'
import './Components/ProductCard.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header></Header>


   <Logo></Logo>

   <ProdutosCard></ProdutosCard> 
  
    <Footer></Footer>

      

    </>
  )
}

export default App

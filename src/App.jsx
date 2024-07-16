import { useState } from 'react'

import Footer from './Components/Footer'
import './Components/Footer.css'




import Header from './Components/Header'
import './Components/Header.css'

import Logo from './Components/Logo'
import './Components/Logo.css'

import ProductCard from './Components/ProductCard'
import './Components/ProductCard.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>


  <Logo></Logo>

   <ProductCard ></ProductCard> 
  
   <Footer></Footer>

      

    </>
  )
}

export default App

// import { useState } from 'react'

import Footer from './Components/Footer'
import './Components/Footer.css'

import Header from './Components/Header'

import Logo from './Components/Logo'
// import './Components/Logo.css'

import ProductCard from './Components/ProductCard'
import './Components/ProductCard.css'

import ProductListing from './Components/ProductListing'
import Buttons from './Components/Buttons'

import ListProductCard from './Components/ProductListing'

import ProductFilter from './Components/ProductFilter'
import './Components/ProductFilter.css'

import BanerPrincipal from './Components/BanerPrincipal.jsx'
import './Components/BarnerPrincipal.css'




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
// let produto2 =[
//   {
//     nome: 'Tênis',
//     descricao:'K-Swiss V8 - Masculino',
//     oldPrice: '$200',
//     newPrice:'$149.9',
//     imagem: 'src/assets/tenisCardUm.png'
//    }
//   ]
  

  return (
  <>
    <Header></Header>

    <BanerPrincipal></BanerPrincipal>

    

    {/* <Logo></Logo>  */}
    {/* <Logo></Logo>  */}

    <ProductFilter/>
    <ListProductCard produtos={produtos}/>
    
    
    <Footer></Footer>
   <ProductCard/>
      

    </>
  )
}

export default App

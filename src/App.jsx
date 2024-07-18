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

import Layout from './pages/Layout.jsx'
import { BrowserRouter } from 'react-router-dom'




function App() {
  // const [count, setCount] = useState(0)



  

  return (
  <>
    {/* <Header></Header>
 
    <ColecoesDestaque2></ColecoesDestaque2>
    <ProductFilter/>
    <ListProductCard produtos={produtos}/>
   
    

    <Footer></Footer> */}
      
          <Layout/>
      


 
      

    </>
  )
}

export default App

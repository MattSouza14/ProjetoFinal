import { useState } from 'react'
import './index.css'

import Footer from './Components/Footer'
import './Components/Footer.css'

import Header from './Components/Header'

import Buttons from './Components/Buttons'


import ColecoesDestaque2 from './Components/ColecoesDestaque2'

import BanerPrincipal from './Components/BanerPrincipal.jsx'
import BuyBox from './Components/BuyBox.jsx'

import DestaqueColecaoIcone from './Components/DestaqueColecaoIcones'

import Layout from './pages/Layout.jsx'
import { BrowserRouter } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout/>
      
    </>
  )
}

export default App

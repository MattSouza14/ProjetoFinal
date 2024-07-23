import { useState } from 'react'
import './index.css'

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

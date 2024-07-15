import { useState } from 'react'
<<<<<<< HEAD
import Footer from './Components/Footer'
import './Components/Footer.css'
=======
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProdutosCard from './Components/ProductCard'

>>>>>>> 82947e214f1d0ee18cbb79b76a537ad042144e65

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
      
      <Footer></Footer>
=======
    <ProdutosCard></ProdutosCard>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
>>>>>>> 82947e214f1d0ee18cbb79b76a537ad042144e65
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'

function App() {
  const [productCount, setProductCount] = useState(0)

  return (
    <>
      <Cart />
      <Header numberOfProduct={productCount}/>
      <main>
        <Meals />
      </main>
    </>
  )
}

export default App

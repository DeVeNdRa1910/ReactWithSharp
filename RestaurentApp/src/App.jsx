import { useState } from 'react'
import './App.css'
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'

function App() {
  const [productCount, setProductCount] = useState(0)
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header numberOfProduct={productCount} onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </>
  )
}

export default App

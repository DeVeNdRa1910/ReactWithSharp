import './App.css'
import AvailableMedicines from './Components/Medicines/AvailableMedicines'
import Medicines from './Components/Medicines/Medicines'
import CartContextProvider from './store/CartProvider'
import Header from './Components/UI/Header'
import { useState } from 'react'
import Cart from './Components/Cart/Cart'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartContextProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Medicines />
      </main>
    </CartContextProvider>
  )
}

export default App

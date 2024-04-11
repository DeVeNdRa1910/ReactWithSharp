import { useState } from 'react'
import './App.css'
import AvailableProduct from './Components/Products/AvailableProduct'
import Header from './Components/UI/Header'
import CartContextProvider from './store/Cart/CartProvider'
import Cart from './Components/Cart/Cart'


function Home() {
  
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
      <CartContextProvider>
        <div className=''>
          <div className="flex justify-center items-center">
            {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
          </div>
          <Header onShowCart={showCartHandler}/>
        </div>
        <div className='bg-gray-600 text-white'>
          <h1 className='text-white py-10 pt-10 text-8xl text-center'>The Generics</h1>
        </div>
        <main className='z-0'>
          < AvailableProduct />
        </main>
      </CartContextProvider>
  )
}

export default Home

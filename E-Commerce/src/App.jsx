import { useState } from 'react'
import './App.css'
import Card from './Components/Cards/Card'
import Cart from './Components/Cart/Cart'
import HeadBar from './Components/Header/Navbar'


function App() {

  const [isCartShow, setIsCartShow] = useState(false)
  
  console.log(isCartShow);
  
  const cartHandler = () => {
    setIsCartShow(prev => !prev)
  }

  console.log(isCartShow);

  return (
    <>
      <HeadBar onShow={cartHandler}/>
      {isCartShow && <Cart />}
      <Card/>
    </>
  )
}

export default App

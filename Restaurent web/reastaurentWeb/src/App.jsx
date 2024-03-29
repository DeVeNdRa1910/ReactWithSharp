import { useState } from 'react'
import './App.css'
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import mealsImage from './assets/foodImage.png'

function App() {
  const [productCount, setProductCount] = useState(0) 
  return (
    <>
      <div className='absolute'>
        <div> 
          <Header numberOfProduct={productCount}/>
        </div>
        <div>
          <Meals/>
        </div>
      </div>
    </>
  )
}

export default App

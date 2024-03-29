import { useState } from 'react'
import './App.css'
import Header from './Components/Layout/Header'

function App() {
  const [productCount, setProductCount] = useState(0) 
  return (
    <>
      <div>
        <Header numberOfProduct={productCount}/>
      </div>
    </>
  )
}

export default App

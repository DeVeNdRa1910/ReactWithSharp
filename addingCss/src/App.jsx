import { useState } from 'react'

import './App.css'
import ExpenseItem from './components/ExpenseItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Let's get started!</h1>
      <ExpenseItem />
    </>
  )
}

export default App

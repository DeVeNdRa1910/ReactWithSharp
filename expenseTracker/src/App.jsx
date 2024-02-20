import { useState } from 'react'
import ExpenseItem from './component/ExpenseItem'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Let's get started</h2>
      <p>This is also visible</p>
      <ExpenseItem></ExpenseItem>
    </>
  )
}

export default App

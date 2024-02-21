import { useState } from 'react'

import './App.css'
import ExpenseItem from './components/ExpenseItem'
import ExpenseDetails from './components/ExpenseDetails'

function App() {
  const [count, setCount] = useState(0)
  let expensesArr = [
    {
      id: 1,
      title: "car insurance",
      date: "2024-2-21",
      amount: "8999/-",
      location: "BHOPAL"
    },
    {
      id: 2,
      title: "Grocery",
      date: "2024-2-5",
      amount: "10999/-",
      location: "BHOPAL"
    },
    {
      id: 3,
      title: "petrol",
      date: "2024-2-10",
      amount: "899/-",
      location: "INDORE"
    },
    {
      id: 4,
      title: "petrentrol",
      date: "2024-2-1",
      amount: "4999/-",
      location: "Bangluru"
    }
  ]

  return (
    <>
    <h1>Let's get started!</h1>
      {
        expensesArr.map(exp=>(
          <>
            <ExpenseItem location={exp.location} date={exp.date} />
            <ExpenseDetails title={exp.title} amount={exp.amount} />
          </>
        ))
      }
    </>
  )
}

export default App

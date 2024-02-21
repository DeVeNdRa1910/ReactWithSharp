import { useState } from 'react'

import './App.css'
import ExpenseItem from './components/ExpenseItem'

function App() {
  const [count, setCount] = useState(0)
  let expensesArr = [
    {
      id: 1,
      title: "car insurance",
      date: "2024-2-21",
      amount: "₹8999/-",
      location: "BHOPAL"
    }
  ]
  for (let i = 2; i <= 100; i++){
    let temp = {
      id: i,
      title: "car insurance",
      date: "2024-2-21",
      amount: Math.floor(Math.random()*10000),
      location: "BHOPAL"
    }
    expensesArr.push(temp);
  }
  console.log(expensesArr);
  return (
    <>
    <h1>Let's get started!</h1>
      {
        expensesArr.map(exp=>(
          <ExpenseItem
            location={exp.location}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          />
        ))
      }
    </>
  )
}

export default App

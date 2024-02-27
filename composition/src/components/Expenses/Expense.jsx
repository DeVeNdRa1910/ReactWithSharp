import React, { useState } from 'react'
import './Expense.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

function Expense(props) {
  // props.items.foeEach((expense) => { // Use map instead of forEach
  //       console.log(expense.title , expense.amount);
  // })

  const [filteredYear , setFilteredYear] = useState('')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onApplyFilter={filterChangeHandler} />

      {/* {
        filteredExpenses.length === 0 ? <h2>No expenses found.</h2> : filteredExpenses.map((expense) => ( // Use map instead of forEach
        <ExpenseItem
          key={expense.id} // Add a unique key prop for each item
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
      } */}
      {/* we can use && here ->   condition && stmt => if condition will true then only stmt eill ruin or print */}
      {filteredExpenses.length===0 && <h2>No expenses found.</h2>}
      {filteredExpenses.length===1 && 
        filteredExpenses.map((expense) => ( 
          <div>
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
            <h2>"Only single Expense here. Pleas add more..."</h2>
          </div>
        ))
      }
      {filteredExpenses.length > 1 && filteredExpenses.map((expense) => ( 
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  )
}

export default Expense

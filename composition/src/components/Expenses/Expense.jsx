import React from 'react'
import './Expense.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';

function Expense(props) {
  // props.items.foeEach((expense) => { // Use map instead of forEach
  //       console.log(expense.title , expense.amount);
  // })
  return (
    <Card className="expense">

      {props.items.map((expense) => ( // Use map instead of forEach
        <ExpenseItem
          key={expense.id} // Add a unique key prop for each item
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  )
}

export default Expense

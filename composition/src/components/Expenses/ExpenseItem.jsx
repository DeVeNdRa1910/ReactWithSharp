import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import { useState } from 'react';

function ExpenseItem(props) {

  const [title , setTitle] = useState(props.title)
  const [exp , setExp] = useState(props.amount) 
  function changeTitle(){
    setTitle('title is being change');
  }
  function changeExpense() {
    setExp(100)
  }

  return (
    <Card itenId={props.id} className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹{exp}</div>
      </div>
      <button onClick={changeTitle}>Change title</button>
      <button onClick={changeExpense}>Change expense</button>
    </Card>
  )
}

export default ExpenseItem

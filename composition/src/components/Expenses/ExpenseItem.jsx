import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './UI/Card'
import React, { useState } from 'react';

function ExpenseItem(props) {

  return (
    <Card itenId={props.id} className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
      <button onClick={deleteTitle(id)} >Delete Expense</button>
    </Card>
  )
}

export default ExpenseItem

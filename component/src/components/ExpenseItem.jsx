import React from 'react'
import './ExpenseItem.css'

function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <div>{props.date}</div>
      <div className='expense-item__description'>
        <h2>{props.location}</h2>
      </div>
    </div>
  )
}

export default ExpenseItem

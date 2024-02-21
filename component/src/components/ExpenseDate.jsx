import React from 'react'
import './ExpenseDate.css'

function ExpenseDate(props) {
  const month = props.date.toLocalString('en-US' , {month: 'long'});
  const day = props.date.toLocalString('en-US' , {day: '2-digit'});
  const year = props.date.getFullYear();
  return (
    <div className='expense-item'>
      <div className='date'>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.location}</h2>
      </div>
    </div>
  )
}

export default ExpenseDate

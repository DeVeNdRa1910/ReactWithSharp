import React, { useState } from 'react'

function ExpenseForm() {
    const [newtitle , setNewTitle] = useState('');

    const addTitle = (event) => {
        setNewTitle(event.target.value);
    }

    const [newAmount , setNewAmount] = useState(0);

    const addAmount = (event) => {
        setNewAmount(event.target.value);
    }
    const [newDate , setNewDate] = useState('');

    const addDate = (event) => {
        setNewtitle(event.target.value);
    }

  return (
    <div>
      <form>
        <div className='new-expense_controls'>
            <div className='new-expense_controls'>
                <label>Title:</label>
                <input type="text" onChange={addTitle}/>
            </div>
            <div className='new-expense_controls'>
                <label>Date:</label>
                <input type="date" onChange={addAmount}/>
            </div>
            <div className='new-expense_controls'>
                <label>Amount:</label>
                <input type="number" onChange={addDate}/>
            </div>
        </div>
        <div className='new-expense_action'>
            <button type='submit'>ADD</button>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForm

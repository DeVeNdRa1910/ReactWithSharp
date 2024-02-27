import React, { useState } from 'react'
import './ExpenseForm.css'


function ExpenseForm(props) {

    // Or we can use one useState inplace of multiple useState but below technique it not optimize bc in that you are override , creating object many times

    // const [userInput , setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // const addTitle = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredTitle : event.target.value,
    //     // });

    //     setUserInput((prevState)=>{
    //         return  {...prevState  , enteredTitle: event.target.value}
    //     })
    // }

    // const addAmount = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredAmount : event.target.value,
    //     // });
    //     setUserInput((prevState) => {
    //         return {...prevState , enteredAmount: event.target.value}
    //     })
    // }

    // const addDate = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredDate : event.target.value,
    //     // });
    //     setUserInput((prevState)=>{
    //         return {...prevState , enteredDate: event.target.value}
    //     })
    // }

    const [newTitle , setNewTitle] = useState('');
    const [newAmount , setNewAmount] = useState(0);
    const [newDate , setNewDate] = useState('');
 
    const addTitle = (event) => {
        setNewTitle(event.target.value);
    }

    const addAmount = (event) => {
        setNewAmount(event.target.value);
    }

    const addDate = (event) => {
        setNewDate(event.target.value);
    }

    function submitHandler(e){
        
        e.preventDefault();

        const newExpenseData = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        }
        
        props.onSaveExpenseData(newExpenseData);

        setNewAmount('')
        setNewDate('')
        setNewTitle('')
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='formElements'>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Title:</label>
                    <input type="text" className="title" value={newTitle} onChange={addTitle}/>
                </div>
                <div className='new-expense_control'>
                    <label>Date:</label>
                    <input type="date" className="date" value={newDate} onChange={addDate} min={'1999-01-01'} max={"2025-11-10"}/>
                </div>
                <div className='new-expense_control'>
                    <label>Amount:</label>
                    <input type="number" className="amount" value={newAmount} onChange={addAmount}/>
                </div>
            </div>
            <div className='new-expense_action'>
                <button type='submit' >ADD</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForm

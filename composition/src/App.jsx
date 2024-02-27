import { useState } from 'react'

import './App.css'
import ExpenseItem from './components/Expenses/ExpenseItem'
import Expense from './components/Expenses/Expense'
import NewExpense from './components/newExpense/NewExpense'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


  function onAddHandler(expense){

    // const newDataList = [
    //   ...expenses,
    //   expense
    // ]
    
    console.log("In App.jsx");
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={onAddHandler}/>
      <Expense items={expenses} />
    </div>
  );
}

export default App

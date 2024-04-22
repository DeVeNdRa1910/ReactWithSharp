import React, {useRef} from 'react'
import LoginScreen from './LoginScreen';
import firebaseApp from '../Firebase'
import { getDatabase, ref, set } from "firebase/database";
import { nanoid } from 'nanoid';

// let database = firebaseApp.database();

// const db = getDatabase();

function Expenses() {

    const categoryRef = useRef();
    const nameRef = useRef();
    const amountRef = useRef(); 

    const addExpenseHandler = async (e) => {
        e.preventDefault();

        const category = categoryRef.current.value;
        const name = nameRef.current.value;
        const amount = amountRef.current.value;

        const expId = nanoid();

        const expense = {
            id: expId,
            category: category,
            name: name,
            amount: amount
        }

        try {
            const resp = await fetch("https://expense-tracker-4a93b-default-rtdb.firebaseio.com/users.json", {
                method: 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(expense)
            })

            if(!resp.ok){
                throw new Error("Somthing Went Wrong !!")
            }else{
                alert("Expense added in List")
            }

            const data = await resp.json();

            console.log(data);
        } catch (error) {
            console.log(error.message);
        }

        categoryRef.current.value = "";
        nameRef.current.value ="";
        amountRef.current.value = "";

    }
  
    return (
        <div>
            <div>
                <form onSubmit={addExpenseHandler}>
                    <label htmlFor="Category">Category</label>
                    <input className='bg-stone-800' ref={categoryRef} type="text" placeholder='Food, Transport, Education...' />
                    <label htmlFor="name">Name</label>
                    <input className='bg-stone-800' ref={nameRef} type="text" placeholder='Spend For ?'/>
                    <label htmlFor="Amount">Amount</label>
                    <input className='bg-stone-800' ref={amountRef} type="text" placeholder='Amount'/>
                    <button type='submit'>ADD</button>
                </form>
            </div>
        </div>
    )

}

export default Expenses 
import React, {useRef} from 'react'
import { nanoid } from 'nanoid';

// let database = firebaseApp.database();

// const db = getDatabase();

function Expenses() {

    const categoryRef = useRef("");
    const nameRef = useRef("");
    const amountRef = useRef(0); 

    const addExpenseHandler = async (e) => {
        e.preventDefault();

        const category = categoryRef.current.value;
        const name = nameRef.current.value;
        const amount = amountRef.current.value;

        const expId = nanoid();

        const expense = {
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
        <div className='w-full'>
            <div className='flex justify-center mt-10 border border-white w-11/12 mx-auto rounded-2xl py-8'>
                <form onSubmit={addExpenseHandler} className='w-full '>
                    <div>
                        <label className='ml-6' htmlFor="Category">Category: </label>
                        <input className='bg-stone-800 px-14 py-1 border border-white hover:border-blue-500 ml-2 mr-5 rounded-xl ' ref={categoryRef} type="text" placeholder='Food, Transport, Education...' />
                        <label className='ml-6' htmlFor="name">Name: </label>
                        <input className='bg-stone-800 px-14 py-1 border border-white hover:border-blue-500 mr-5 ml-2 rounded-xl ' ref={nameRef} type="text" placeholder='Spend For ?'/>
                        <label className='ml-6' htmlFor="Amount">Amount: </label>
                        <input className='bg-stone-800 px-14 py-1 border border-white hover:border-blue-500 ml-3  rounded-xl ' ref={amountRef} type="text" placeholder='Amount'/>
                    </div>
                    <div className='flex justify-center mt-10 w-full'>
                        <button className='w-1/5  bg-zinc-950 border border-white hover:border-green-600 py-1.5 rounded-xl hover:text-green-600' type='submit'>ADD</button>
                    </div>
                </form>
            </div>

        </div>
    )

}

export default Expenses 
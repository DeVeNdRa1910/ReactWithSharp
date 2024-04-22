import React, {useEffect, useRef, useState} from 'react'

// var database = firebaseApp.database()


function ExpenseList() {

    const [state, setState] = useState(false)
    
    const [isFirst , setIsFirst] = useState(true)

    const [expList, setExpList] = useState([]);

    const buttonRef = useRef(null)
    
    useEffect(() => {
        fetch("https://expense-tracker-4a93b-default-rtdb.firebaseio.com/users.json")
            .then(resp => resp.json())
            .then(data => {
                // console.log(data);
                const newList = Object.keys(data).map(key => 
                    {
                        // console.log("key is ",key)
                        return {id: key, ...data[key]}
                    }
                )
                // console.log(newList);
                setExpList(newList)
            })
    }, [state])

    function reloadHandler(){
        if(expList.length ===0) {
            alert("Data Not Found!!")
        }
        console.log("Fetching");
        setIsFirst(false)
        setState(prev => !prev)
    }

    const editHandler = (userId) => {
        
        const newExp = {
            id: userId,
            category: "Food",
            name: "Panipuri",
            amount: 60
        }

        fetch(`https://expense-tracker-4a93b-default-rtdb.firebaseio.com/users/${userId}.json`,{
            method: 'PUT',
            headers: {
                'Content-Type' : "aaplication/json"
            },
            body: JSON.stringify(newExp)
        })
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

    const deleteHandler = (userId) => {
        fetch(`https://expense-tracker-4a93b-default-rtdb.firebaseio.com/users/${userId}.json` , {method: 'DELETE'})
            .then(resp => resp.json())
            .then(data => {
                setState(prev => !prev)
                alert("Expense Deleted")
                console.log("Inside deleteHandler ",data)
            })
        setState(prev => !prev)
    }


  return (
    <div>
        <div  className='flex justify-center mt-5 w-full'>
            <button className='text-lg font-bold border text-blue-400 hover:border-blue-400 hover:text-white py-1.5 px-14 rounded-xl bg-black mb-1 mx-auto' ref={buttonRef} onClick={reloadHandler}>{isFirst ? "Fetch Expenses" : "Reload"}</button>
        </div>
        <ul className='mt-12'>
            {
                expList.map(item => {
                    return (
                        <li className='flex justify-around bg-slate-950 mx-auto mb-2 py-2 rounded-xl w-4/5' key={item.id}>
                            <div className='flex justify-between w-3/5 text-xl'>
                                <h2>{item.category}</h2>
                                <h2>{item.name}</h2>
                                <h2 className='font-bold'>{item.amount}₹</h2>
                            </div >
                            <div className='flex justify-around w-1/6'>
                                <button className='border text-blue-400 hover:border-blue-400 hover:text-white py-1 px-6 rounded-xl bg-black mb-1 mx-auto' onClick={()=>{editHandler(item.id)}}>Edit</button>
                                <button className='border text-blue-400 hover:border-red-600 hover:text-red-600 py-1 px-6 rounded-xl ml-2 bg-black mb-1 mx-auto' onClick={()=>{deleteHandler(item.id)}}>Delete</button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default ExpenseList

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
                const newList = Object.keys(data).map(key => ({id: key, ...data[key]}))
                console.log("Fetching Data");
                setExpList(newList)
            })
    }, [state])

    function reloadHandler(){
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

        fetch(`https://expense-tracker-4a93b-default-rtdb.firebaseio.com/users.json/${userId}`,{
            method: 'PUT',
            headers: {
                'Content-Type' : "aaplication/json"
            },
            body: JSON.stringify(newExp)
        })
            .then(resp => resp.json)
            .then(data => console.log(data))
    }

    const deleteHandler = (userId) => {
        fetch(`https://expense-tracker-4a93b-default-rtdb.firebaseio.com/users.json/${userId}` , {method: 'DELETE'})
            .then(resp => resp.json)
            .then(data => {
                alert("Expense Deleted")
                console.log(data)
            })
    }


  return (
    <div>
        <button ref={buttonRef} onClick={reloadHandler}>{isFirst ? "Fetch Expenses" : "Reload"}</button>
        <ul>
            {
                expList.map(item => {
                    return (
                        <li key={item.id}>
                            <h4>{item.category} - {item.name} - {item.amount}₹</h4> 
                            <button onClick={()=>{editHandler(item.id)}}>Edit</button>
                            <button onClick={deleteHandler}>Delete</button>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default ExpenseList

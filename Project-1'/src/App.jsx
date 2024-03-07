import React ,{ useState } from 'react'
import './App.css'
import AddUser from './Components/Users/AddUser'
import UsersList from './Components/Users/UsersList'



function App() {
  const [enteredUsersList, setEnteredUsersList] = useState([]);
       
  const handleAddUser =(uName , uAge , uCollege) => {
    setEnteredUsersList((prevUsersLsit) => {
      return [
        ...prevUsersLsit, 
        {name: uName , age: uAge , college: uCollege , id: Math.random().toString()}, 
      ];
    });
  }
  
  return (
    <>
      <AddUser onAddUser={handleAddUser} />
      <UsersList  users={enteredUsersList} />
    </>
  )
}

export default App

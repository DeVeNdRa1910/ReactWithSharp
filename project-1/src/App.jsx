import React ,{ useState } from 'react'
import './App.css'
import AddUser from './Components/Users/AddUser'
import UsersList from './Components/Users/UsersList'



function App() {
  const [enteredUsersList, setEnteredUsersList] = useState([]);

  const handleAddUser =(uName , uAge) => {
    setEnteredUsersList((prevUsersLsit) => {
      return [
        ...prevUsersLsit, 
        {name: uName , age: uAge , id: Math.random().toString()}, 
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

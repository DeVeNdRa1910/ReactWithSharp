import React, {useState} from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModel from '../UI/ErrorModel'

function AddUser(props) {
  const [username , setUsername] = useState('');
  const [age , setAge] = useState(0);
  const [error , setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // age is a String not number by the functionality of JS there for can apply trim() function ovcer them
    if(username.trim().length === 0 || age.trim().length === 0){
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }
    // here age is String not number for that we converting String into number by adding +
    if(+age < 1){  
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      });   
      return;
    }

    props.onAddUser(username , age);
    setUsername('');
    setAge(0);
  }

  const handleUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  }

  const handleAge = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      { error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit} >
            <label htmlFor="username" >Username</label>
            <input id='username' type="text" value={username} onChange={handleUsername}/>
            <label htmlFor="age">Age (Years)</label>
            <input id='age' type="number" value={age} onChange={handleAge}/>
            <Button type='submit' >Add User</Button>
        </form>
    </Card>
    </>
  )
}

export default AddUser

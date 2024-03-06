import React from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'


function AddUser(props) {

  function handleSubmit (e) {
    e.preventDefault();
  }

  return (
    <Card className={classes.input}>
        <form onSubmit={handleSubmit} >
            <label htmlFor="username">Username</label>
            <input id='username' type="text" />
            <label htmlFor="age">Age (Years)</label>
            <input id='age' type="number" />
            <button type='submit' >Add User</button>
        </form>
    </Card>
  )
}

export default AddUser

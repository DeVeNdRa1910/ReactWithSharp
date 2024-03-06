import { useState } from 'react'
import './App.css'
import AddUser from './Components/Users/AddUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddUser />
    </>
  )
}

export default App

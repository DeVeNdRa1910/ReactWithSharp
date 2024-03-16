import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [studenCount, setStudenCount] = useState(0)


  const handleInput = (e) => {

  }

  const handleSubmit = (e) => {

  }

  return (
    <>
      <div className="header">
        <h1 className="text-3xl font-bold p-1 text-center">
          Student Manager
        </h1>
        <h3 className='text-2xl font-bold p-2 text-center bg-slate-600'>Number Of Student {studenCount}</h3>
      </div>
      <div className='StudentInput'>
        <label htmlFor="Name">Name</label>
        <input type="text" name='studentName' placeholder='NAME' onChange={handleInput}/>
        <label htmlFor="Phone">Phone</label>
        <input type="number" name='studentPhone' placeholder='PHONE' onChange={handleInput} />
        <label htmlFor="Address">Address</label>
        <input type="text" name='studentAddress' placeholder='ADDRESS' onChange={handleInput}/>
      </div>
      <button onClick={handleSubmit} className='bg-black py-2 px-6 rounded-xl '>ADD</button>
    </>
  )
}

export default App

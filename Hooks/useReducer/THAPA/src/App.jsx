import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialState = 0;
const reducer = (state , action) => {
  if(action.type === "INCREMENT"){
    return state+1;
  }
  if(action.type === "DECREMENT"){
    return state-1;
  }

  return state;
}

function App() {
  
  const [state, dispatch] = useReducer(reducer , initialState)
  return (
    <>
      <h1>Count is {state}</h1>
      <div className="card">
        <button onClick={() => dispatch({type: "INCREMENT"})}>INC count {state}</button>
        <br />
        <button onClick={() => dispatch({type: "DECREMENT"})}>DEC count {state}</button>
      </div>
    </>
  )
}

export default App

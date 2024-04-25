import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/Auth'

function Auth() {

  const dispatch = useDispatch();

  const submitHandler =(e) =>{
    e.preventDefault();
    dispatch(authActions.login())
  }

  return (
    <div className="flex justify-center">
        <form onSubmit={submitHandler} className="flex flex-col gap-4 bg-stone-200 w-2/5 p-6 rounded-2xl mt-20">
            <input className='border-2 border-stone-800 p-2 rounded-md' type="email" placeholder='Enter Your Email'/>
            <input className='border-2 border-stone-800 p-2 rounded-md' type="password" placeholder='Enter Your Password'/>
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-black hover:text-white  hover:cursor-pointer text-xl font-bold'>Login</button>
        </form>
    </div>
  )
}

export default Auth
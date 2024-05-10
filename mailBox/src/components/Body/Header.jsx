import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();
  
  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className='w-full flex mt-0'>
      <div className='w-[15%] flex items-center text-3xl'>
        <FiAlignJustify />
        <h1 className='ml-1 flex items-center '> <img className='h-8 w-8 mr-1' src="https://cdn.iconscout.com/icon/free/png-256/free-gmail-2981844-2476484.png?f=webp" alt="" /> Gmail</h1>
      </div>
      <form className='w-[65%] flex text-2xl' action="" onSubmit={submitHandler}>
        <input className='w-[80%] text-xl pl-4 outline-none bg-zinc-800 rounded-l-md' type="text" placeholder='Find messages, documents, photos or people'/>
        <button className='w-[20%] font-bold bg-blue-500 text-center pl-12 rounded-r-md' type='submit'><CiSearch /></button>
      </form>
      <div className='w-[20%] flex justify-end'>
        <button onClick={()=>{navigate('/')}} className='bg-red-600 text-white px-4 py-0.5 rounded-lg'>Logout</button>
      </div>
    </div>
  )
}

export default Header

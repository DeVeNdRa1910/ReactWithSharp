import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { PiSignOutBold } from "react-icons/pi";
import { getAuth } from 'firebase/auth';
import firebaseApp from '../../FirebaseApp';
import firebase from 'firebase/compat/app';

const auth = getAuth(firebaseApp);


function Header() {

  const name = auth.currentUser?.email;

  const navigate = useNavigate();
  
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Isme kuchh karenge")
  }

  const logOutHandler = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      console.error(error);
    }
    return;
  }

  return (
    <div className='w-full flex mt-0 bg-stone-800 py-2 shadow-2xl'>
      <div className='w-[15%] flex gap-2 items-center text-xl pl-4'>
        <button><FiAlignJustify /></button>                                                 
        <h1 className='ml-1 flex items-center font-bold text-2xl '> <img className='h-8 w-8 mr-1' src="https://cdn.iconscout.com/icon/free/png-256/free-gmail-2981844-2476484.png?f=webp" />Gmail</h1>
      </div>
      <form className='w-[65%] flex text-sm' action="" onSubmit={submitHandler}>
        <input className='w-[80%] py-0.5 text-md pl-4 outline-none bg-stone-700 rounded-l-md' type="text" placeholder='Find messages, documents, photos or people'/>
        <button className='bg-stone-600 text-2xl  px-6 font-bold rounded-r-md' type='submit'><CiSearch /></button>
      </form>
      <div>
        <h4>{name}</h4>
      </div>
      <div className='w-[20%] flex justify-end mr-3'>
        <button onClick={logOutHandler} className='bg-red-600 hover:bg-red-700 font-semibold text-white px-2 py-0.5 rounded-lg flex justify-around items-center'> <PiSignOutBold />Signout</button>
      </div>
    </div>
  )
}

export default Header

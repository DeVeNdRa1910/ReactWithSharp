import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store'


function Header() {
  
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const dispatch = useDispatch()

  const clickHandler = () =>{
    dispatch(authActions.logout());
    alert("Logout")
  }

  return (
    <nav className='flex justify-between w-full items-center bg-slate-100 fixed top-0 z-10'>
          <h1 className='text-2xl font-bold pl-10'>React Auth</h1>
        {isAuthenticated && <div>
          <div className='flex justify-between items-center gap-5 pr-10'>
              <ul className='flex justify-between gap-5 font-semibold'>
                  <li>My Products</li>
                  <li>My Sales</li>
              </ul>
              <button onClick={clickHandler} className='bg-blue-500 text-white px-4 py-2 rounded-md my-1 hover:bg-black hover:text-white  hover:cursor-pointer font-bold'>Logout</button>
          </div>
        </div>}
    </nav>
  )
}

export default Header
import React from 'react'
import { NavLink } from 'react-router-dom'

function MainNavigation() {
  return (
    <header className='text-white w-full h-16 bg-purple-800 shadow-lg flex justify-between items-center px-10p'>
        <NavLink to='/'>
            <div className='text-4xl  font-bold ml-20'>React Auth</div>
        </NavLink>
        <nav>
            <ul className='list-none m-0 p-0 flex items-baseline mr-20 font-bold'>
                <li className='m-4 hover:text-purple-200'>
                    <NavLink to='/auth'>Login</NavLink>
                </li>
                <li className='m-4 hover:text-purple-200'>
                    <NavLink to='/profile'>Profile</NavLink>
                </li>
                <li className=' text-xl m-4 text-inherit bg-transparent border border-white font-bold  py-1 px-6 rounded-2xl cursor-pointer hover:bg-purple-200 hover:text-purple-950'>
                    <button>Logout</button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation
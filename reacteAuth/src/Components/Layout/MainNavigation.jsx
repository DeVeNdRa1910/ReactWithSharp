import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../store/AuthContext'

function MainNavigation() {

    const authCtx = useContext(AuthContext)

    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = (e) => {
        authCtx.logout();
        authCtx.isLoggedIn=false;
    }

  return (
    <header className='text-white w-full h-16 bg-purple-800 shadow-lg flex justify-between items-center px-10p'>
        <NavLink to='/'>
            <div className='text-4xl  font-bold ml-20'>React Auth</div>
        </NavLink>
        <nav>
            <ul className='list-none m-0 p-0 flex items-baseline mr-20 font-bold'>
                {!isLoggedIn && 
                    <li className='m-4 hover:text-purple-200'>
                        <NavLink to='/auth'>Login</NavLink>
                    </li>
                }
                {isLoggedIn && 
                    <li className='m-4 hover:text-purple-200'>
                        <NavLink to='/profile'>Profile</NavLink>
                    </li>
                }
                {isLoggedIn && 
                    <li className=' text-xl m-4 text-inherit bg-transparent border border-white font-bold  py-1 px-6 rounded-2xl cursor-pointer hover:bg-purple-200 hover:text-purple-950'>
                        <button onClick={logoutHandler}>Logout</button>
                    </li>
                }
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation
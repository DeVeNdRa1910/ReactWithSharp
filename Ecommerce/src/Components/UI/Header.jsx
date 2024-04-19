import React from 'react'
import { useContext } from 'react'
import CartContext from '../../store/Cart/CartContext'
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/AuthContext'

function Header(props) {

    const authCtx = useContext(AuthContext)
    const login = authCtx.isLoggedIn
    
    const cartCtx = useContext(CartContext)
    const cartLength = cartCtx.items.length;

  return (
    <nav className='flex justify-between items-center mb-0.5 bg-black text-white w-full sticky'>
      {login ? <>
                <div className='flex justify-between px-10 py-2'>
                  <NavLink to="/music" className='px-3 mx-2 border border-black hover:border-white hover:rounded-xl'>HOME</NavLink>
                  <NavLink to="/home" className='px-3 mx-2 border border-black hover:border-white hover:rounded-xl'>STORE</NavLink>
                  <NavLink to="/about" className='px-3 mx-2 border border-black hover:border-white hover:rounded-xl'>ABOUT</NavLink>
                  <NavLink to="/contactUs" className='px-3 mx-2 border border-black hover:border-white hover:rounded-xl'>CONTACT-US</NavLink>
                  <NavLink to="/profile" className='px-3 mx-2 border border-black hover:border-white hover:rounded-xl'>PROFILE</NavLink>
                </div>
                <div className='flex justify-end mr-12'>
                  <button onClick={props.onShowCart} className='mr-2 px-4 py-1 my-2 border-2 border-blue-400 rounded-xl hover:border-blue-600 shadow-xl'>CART</button>
                  <h2 className='text-blue-400 text-xl'>{cartLength}</h2>
                </div>
              </>
              : 
              <div>
                <NavLink to="/" className='px-3 mx-2 border border-black hover:border-white hover:rounded-xl'>Login</NavLink>
              </div>
      }
    </nav>
  )
}

export default Header

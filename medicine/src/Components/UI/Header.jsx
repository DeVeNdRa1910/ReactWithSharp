import React from 'react'
import CartContext from '../../store/CartContext'
import { useContext } from 'react'

function Header(props) {
    
    const cartCtx = useContext(CartContext)

    const numberOfCartItems = cartCtx.items.reduce((currNumber, item)=>{
      return currNumber+item.quantity
    } , 0)

  return (
    <div>
      <header className='flex justify-around py-1 bg-slate-400 sticky top-0 z-50'>
        <h2 className='text-3xl font-bold'>MEDICINE</h2>
        <button onClick={props.onShowCart} className='flex justify-around align-middle px-10 rounded-2xl bg-slate-300 hover:bg-slate-800 hover:text-white'>
            <h2 className='text-2xl mr-1 my-1'>🛒</h2>
            <h3 className='text-xl mr-4 my-2'>CART</h3>
            <h3 className='text-2xl mx-2 my-1 px-4 font-bold '>{numberOfCartItems}</h3>
        </button>
      </header>
    </div>
  )
}

export default Header

import React from 'react'
import mealsImage from '../../assets/foodImage.png'
import { useContext } from 'react'
import CartContext from '../../store/cartContext'

function Header(props) {
 const cartCtx = useContext(CartContext)

 const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount; 
}, 0);

 console.log("numberOfCartItems inside Header   " + numberOfCartItems);
  return (
    <div className='text-white'>
        <header className='flex justify-around  bg-orange-700 py-1 sticky top-0 z-50'>
            <h2 className='text-3xl font-bold'>ReactMeals</h2>
            <button onClick={props.onShowCart} className='flex justify-around align-middle px-10 rounded-2xl bg-orange-900 hover:bg-orange-950'> 
                <h2 className='text-2xl mr-1 my-1'>🛒</h2>
                <h3 className='text-xl mr-4 my-2'>your cart </h3>
                <h3 className='text-xl m-2 px-4 font-bold bg-orange-700 rounded-xl'>{numberOfCartItems}</h3>
            </button>
        </header>
        <div >
            <img className='w-full max-h-3/6 bg-fixed z-0' src={mealsImage} alt="" />
        </div>
    </div>
  )
}

export default Header

import React from 'react'
import mealsImage from '../../assets/foodImage.png'


function Header(props) {

  return (
    <div className='text-white'>
        <header className='flex justify-around  bg-orange-700 py-1'>
            <h2 className='text-3xl font-bold'>ReactMeals</h2>
            <button onClick={props.onShowCart} className='flex justify-around align-middle px-10 rounded-2xl bg-orange-900 hover:bg-orange-950'> 
                <h2 className='text-1xl mr-1 my-2'>🛒</h2>
                <h3 className='text-1xl mr-4 my-2'>your cart </h3>
                <h3 className='text-1xl m-2 px-4 font-bold bg-orange-700 rounded-xl'> {props.numberOfProduct}</h3>
            </button>
        </header>
        <div >
            <img className='w-full max-h-3/6 bg-fixed z-0 bg-fixed' src={mealsImage} alt="" />
        </div>
    </div>
  )
}

export default Header

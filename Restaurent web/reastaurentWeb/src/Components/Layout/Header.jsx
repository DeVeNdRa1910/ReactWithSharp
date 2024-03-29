import React from 'react'

function Header(props) {

  return (
    <div>
        <header className='flex justify-around  bg-orange-700 py-1'>
            <h2 className='text-3xl font-bold'>ReactMeals</h2>
            <div className='flex justify-around align-middle px-10 rounded-2xl bg-orange-900'> 
                <h2 className='text-1xl mr-1 my-2'>🛒</h2>
                <h3 className='text-1xl mr-4 my-2'>your cart </h3>
                <h3 className='text-1xl m-2 px-4 font-bold bg-orange-700 rounded-xl'> {props.numberOfProduct}</h3>
            </div>
        </header>
        <div >
            <img className='w-full min-h-32 max-h-40 bg-fixed ' src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default Header

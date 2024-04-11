import React from 'react'

function CartItem(props) {
  return (
    <li className='flex justify-around items-center border-b-2 border-black py-2 my-3'>
        <div>
            <img src={props.image} alt={props.name} className='w-24'/>
            <h2 className='text-xl font-semibold'>{props.name}</h2>
        </div>
        <div>
            <span className='text-lg font-bold'>{props.price}₹</span>
            
        </div>
        <div>
            <button className='font-bold text-xl bg-gray-300 border-2 w-12 text-center rounded-l-lg cursor-pointer mt-1/4 hover:bg-white text-gray-700 active:text-black ' onClick={props.onAdd}>+</button>
            <span className='font-bold text-xl bg-white border-t-2 border-b-2 w-12 px-3 text-center mt-1/4 '>{props.quantity}</span>
            <button className='font-bold text-xl bg-gray-300 border-2 w-12 text-center rounded-r-lg cursor-pointer mt-1/4 hover:bg-white text-gray-700 active:text-black' onClick={props.onRemove}>-</button>
        </div>
    </li>
  )
}

export default CartItem

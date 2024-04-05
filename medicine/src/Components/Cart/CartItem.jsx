import React from 'react'

function CartItem(props) {
  return (
    <li className='flex justify-between items-center border-b-2 border-solid border-gray-400 py-2 my-2'>
      <div>
        <h2 className='mb-2 text-black text-2xl font-sans font-extrabold'>{props.name}</h2>
        <div>
            <span className='text-lg font-bold items-center'>{props.price}₹</span>
            <span className='font-bold border-2 border-solid border-gray-300 py-1 px-3 rounded-lg '>x{props.quantity}</span>
        </div>
      </div>
      <div className='flex flex-row justify-around px-6'>
        <button className='font-bold text-xl bg-gray-600 text-white border-2 border-black w-12 text-center rounded-lg cursor-pointer mt-1/4 hover:bg-white hover:text-gray-700 active:bg-gray-700 active:text-white mr-2' onClick={props.onRemove}>-</button>
        <button className='font-bold text-xl bg-gray-600 text-white border-2 border-black w-12 text-center rounded-lg cursor-pointer mt-1/4 hover:bg-white hover:text-gray-700 active:bg-gray-700 active:text-white' onClick={props.onAdd}>+</button>
      </div>
    </li>
  )
}

export default CartItem

import React from 'react'

function CartItem(props) {
  return (
    <li className='flex justify-between items-center border-b-2 border-solid border-orange-900 py-2 my-2'>
        <div>
            <h2 className='mb-2 text-gray-700'>{props.name}</h2>
            <div className='w-20 flex justify-between items-center'>
                <span className='font-bold items-center'>{props.price}₹</span>
                <span className='font-bold border border-solid border-gray-300 py-1 px-3 rounded-md text-gray-700'>x{props.amount}</span>
            </div>
        </div>
        <div className='flex flex-row '>
            <button className='font-bold text-lg text-orange-700 border border-orange-700 w-12 text-center rounded-md bg-transparent cursor-pointer mt-1/4 hover:bg-orange-700 hover:text-white active:bg-orange-700 active:text-white' onClick={props.onRemove}>-</button>
            <button className='font-bold text-xl text-orange-700 border border-orange-700 w-12 text-center rounded-md bg-transparent cursor-pointer ml-2 mt-1/4 hover:bg-orange-700 hover:text-white active:bg-orange-700 active:text-white' onClick={props.onAdd}>+</button>
        </div>
    </li>
    //3:26
  )
}

export default CartItem
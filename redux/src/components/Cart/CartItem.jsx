import React from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';

function CartItem(props) {

    const dispatch = useDispatch()

    const {title, quantity, total, price , id} = props.item;

    const newItem = {
        id: id,
        name: title,
        price: price,
    }

    const removeHandler = () => {
        dispatch(cartActions.removeItemFromCart(newItem))
    }
    
    const addHandler = () => {
        dispatch(cartActions.addItemToCart(newItem))
    }

  return (
    <li className='mx-4 bg-stone-500 p-4'>
        <header className='flex justify-between items-baseline'>
            <h3 className='mt-2 text-2xl' >{title}</h3>
            <div className='text-xl font-bold mb-2'>
                {total}{' '}<span className='font-normal text-lg italic'>(₹{price}/item)</span>
            </div>
        </header>
        <div className='flex justify-between items-center'>
            <div className='quantity'>
                X <span className='text-3xl font-bold'>{quantity}</span>
            </div>
            <div className='flex flex-end mx-2 '>
                <button onClick={removeHandler} className='bg-transparent border border-white ml-2 py-1 px-4 text-white hover:bg-stone-600 hover:text-white active:bg-stone-600 active:text-white'>-</button>
                <button onClick={addHandler} className='bg-transparent border border-white ml-2 py-1 px-4 text-white hover:bg-stone-600 hover:text-white active:bg-stone-600 active:text-white'>+</button>
            </div>
        </div>
    </li>
  )
}

export default CartItem
import React from 'react'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import CartContext from '../../store/cartContext'


function Cart(props) {
    const cartCtx = useContext(CartContext)

    const totalAmount  = cartCtx.totalAmount

    const hasItem = cartCtx.items.length > 0

    console.log(totalAmount);

  return (
    <Modal onClose={props.onHideCart}>
        <ul className='list-none m-0 p-0 max-h-80 overflow-auto'>{cartCtx.items.map((item) => (<li key={item.id}>{item.name} ₹{item.price}x{item.amount}</li>))}</ul>
        <div className='flex justify-between items-center font-bold text-2xl m-1'>
            <span>Total Amount</span>
            <span>{totalAmount}₹</span>
        </div>
        <div className='text-right'>
            <div className='text-black cursor-pointer bg-transparent py-2 px-8 rounded-2xl ml-4' >
                <button onClick={props.onHideCart} className='border-2 rounded-xl text-orange-800 bg-white px-8 py-1 mx-2 hover:shadow-2xl hover:bg-slate-200'>Close</button>
                {hasItem && <button className='border-2 rounded-xl bg-orange-800 text-white px-8 py-1 mx-2 hover:shadow-2xl hover:bg-orange-900'>Order</button>}
            </div>
        </div>
    </Modal>
  )
}

export default Cart

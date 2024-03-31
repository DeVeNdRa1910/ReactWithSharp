import React from 'react'
import Modal from '../UI/Modal'

function Cart(props) {
    const cartArr = [{id:'c1' , name: 'Chilli Paneer' , amount: 3 , price: 199}]
  return (
    <Modal>
        <ul className='list-none m-0 p-0 max-h-80 overflow-auto'>{cartArr.map((item) => (<li>{item.name} {item.price}x{item.amount}</li>))}</ul>
        <div className='flex justify-between items-center font-bold text-2xl m-1'>
            <span>Total Amount</span>
            <span>597₹</span>
        </div>
        <div className='text-right'>
            <div className='text-black cursor-pointer bg-transparent py-2 px-8 rounded-2xl ml-4' >
                <button onClick={props.onHideCart} className='border-2 rounded-xl text-orange-800 bg-white px-8 py-1 mx-2 hover:shadow-2xl hover:bg-slate-200'>Close</button>
                <button className='border-2 rounded-xl bg-orange-800 text-white px-8 py-1 mx-2 hover:shadow-2xl hover:bg-orange-900'>Order</button>
            </div>
        </div>
    </Modal>
  )
}

export default Cart

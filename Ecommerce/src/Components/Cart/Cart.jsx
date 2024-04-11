import React, { useContext, useState } from 'react'
import CartItem from './CartItem'
import CartContext from '../../store/Cart/CartContext'
import Modal from './Modal';

function Cart(props) {

    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.totalAmount;

    const hasItem = cartCtx.items.length > 0

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, quantity:1});
    }

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const orderHandler = () =>{
        alert('Thanks for Order')

        cartCtx.items = [];

        console.log(cartCtx.items);
    }

  return (
    <Modal onClose={props.onHideCart} >
        <div>
            <ul className='list-none m-0 p-0 max-h-80 overflow-scroll'>
                {
                    cartCtx.items.map(item => {
                        //console.log(item.image);
                        return (
                            <CartItem 
                                key={item.id}
                                name={item.name}
                                quantity={item.quantity}
                                price={item.price}
                                image={item.image}  
                                onAdd={cartItemAddHandler.bind(null, item)}
                                onRemove={cartItemRemoveHandler.bind(null, item.id)}  
                            />
                        )
                    })
                }
            </ul>

            <div className='flex justify-between items-center text-2xl m-1 '>
                <span>Total Amount:</span>
                <span className='font-bold'>{totalAmount}₹</span>
            </div>
            <div className='text-center'>
                <div className='text-black shadow-xl cursor-pointer bg-transparent py-1 px-8 rounded-2xl ml-4'>
                    <button className='rounded-lg bg-black text-white px-8 py-1 mx-2 border-2 border-black hover:bg-white hover:text-black font-semibold ' onClick={props.onHideCart}>Close</button>
                    {hasItem && <button className='border-2 border-black rounded-lg bg-white text-black font-semibold px-8 py-1 mx-2 hover:bg-black hover:text-white' onClick={orderHandler}>Place Order</button>}
                </div>
            </div>
        </div>
    </Modal>
  )
}

export default Cart
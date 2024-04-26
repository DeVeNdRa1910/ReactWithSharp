import React from 'react'
import Card from '../UI/Card'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

function Cart(props) {

  const cartItems = useSelector(state => state.cart.items)
  //console.log(cartItems);

  return (
    <Card className='max-w-[30rem] bg-stone-800 text-white'>
        <h2 className='text-3xl font-semibold mx-2 mb-2'>Your Shopping Cart</h2>
        <ul className='list-none mb-1'>
          { 
            cartItems.map(item => (
              <li key={item.id}>
                <CartItem 
                  item={{
                    id: item.id,
                    title: item.name, 
                    quantity: item.quantity, 
                    total: item.totalPrice , 
                    price: item.price
                  }}
                />
              </li>
            ))
          }
            
        </ul>
    </Card>
  )
}

export default Cart
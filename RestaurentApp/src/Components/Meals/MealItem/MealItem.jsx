import React, { useContext } from 'react'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cartContext'

function MealItem(props) {
  const cartCtx = useContext(CartContext)
    //make food item visible

  const addToCartHandler = (amount) => {
    
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  
  }

  return (
    <li className='flex justify-between border-b-2'>
      <div className='pt-3 pb-1 rounded-xl '>
        <h3 className='ml-1 text-xl font-bold'>{props.name}</h3>
        <div className='italic'>{props.description}</div>
        <div className='mt-1 text-orange-700 text-lg font-bold'>{props.price}₹</div>
      </div>
      <div className=''>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  )
}

export default MealItem

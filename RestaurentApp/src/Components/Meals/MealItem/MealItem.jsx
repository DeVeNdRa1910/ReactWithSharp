import React from 'react'
import MealItemForm from './MealItemForm'

function MealItem(props) {
    const price = `${props.price}₹`
    //make food item visible
  return (
    <li className='flex justify-between border-b-2'>
      <div className='pt-3 pb-1 rounded-xl '>
        <h3 className='ml-1 text-xl font-bold'>{props.name}</h3>
        <div className='italic'>{props.description}</div>
        <div className='mt-1 text-orange-700 text-lg font-bold'>{price}</div>
      </div>
      <div className=''>
        <MealItemForm />
      </div>
    </li>
  )
}

export default MealItem

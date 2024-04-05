import React, {useContext} from 'react'
import MedicineItemForm from './MedicineItemForm'
import CartContext from '../../../store/CartContext'

function MedicineItem(props) {
    const cartCtx = useContext(CartContext)

    const addToCartHandler = (quantity) => {
        
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            quantity: quantity
        })

    }

  return (
    <li className='flex justify-between border-b-2 border-black m-4'>
      <div>
        <h3 className='text-2xl font-bold'>{props.name}</h3>
        <span><h3 >Quantity Available : <span className='font-bold'>{props.quantityAvailable}</span></h3></span>
        <div>Description : {props.description}</div>
        <div className='mb-2 text-xl font-semibold'>{props.price} ₹</div>
      </div>
      <div>
        <MedicineItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MedicineItem

import React from 'react'
import { uiActions } from '../../store/uiSlice'
import { useDispatch , useSelector} from 'react-redux' 

function CartButton() {

  const dispatch = useDispatch()

  const quantity = useSelector(state => state.cart.totalQuantity);

  //console.log(quantity);

  const toggleHandler = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button onClick={toggleHandler} className='bg-transparent p-2 text-blue-500 border border-blue-500 rounded-md hover:text-white active:text-white'>
        <span className='my-2 py-4 mx-4 text-lg'>My Cart</span>
        <span className='bg-blue-500 px-5 py-0.5 m-2 text-black rounded-2xl'>{quantity}</span>
    </button>
  )
}

export default CartButton
import React from 'react'
import Card from '../UI/Card'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';

function ProductItem(props) {

    const {title, price, description , id} = props;

    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart( {
            id,
            title,
            price,
            description
        } ))
    }


  return (
    <li>
        <Card>
            <header className='flex justify-between items-baseline'>
                <h3 className='my-2 text-2xl font-extrabold'>{title}</h3>
                <div className='bg-gray-900 text-white rounded-full px-6 py-1.5 text-lg'>{price}₹</div>
            </header>
            <p className='text-gray-700'>{description}</p>
            <div className='flex justify-end'>
                <button onClick={addToCartHandler} className='border bg-transparent border-blue-600 text-blue-600 hover:bg-blue-700 hover:border-black hover:text-white px-6 py-1.5 rounded-md'>Add to Cart</button>
            </div>
        </Card>
    </li>
  )
}

export default ProductItem
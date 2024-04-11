import React, { useContext } from 'react'
import CartContext from '../../store/Cart/CartContext'
import ProductContext from '../../store/Product/ProductContext';

function Card(props) {
    const cartCtx = useContext(CartContext);
    const productCtx = useContext(ProductContext);
    const productIndex = productCtx.products.findIndex(item => item.id===props.id);
    const product = productCtx.products[productIndex];
    


    const addToCartHandler = (e) =>{
        e.preventDefault();
        //console.log(props.image);
        cartCtx.addItem({
            id: props.id,
            name: props.title,
            image: props.image,
            price: props.price,
            quantity: 1
        })

    }

  return (
    <div className="m-2 max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden">
        <img className="rounded-2xl w-full p-4 transition-transform transform hover:scale-105" src={props.image} alt={props.title} />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
            <div className='flex justify-between'>
                <h1 className='text-white text-xl'>{props.price}₹</h1>
                <button className='bg-blue-600 text-white px-8 py-1 rounded-xl'
                    onClick={addToCartHandler}
                >Add To Cart</button>   
            </div>
        </div>
    </div>
  )
}

export default Card

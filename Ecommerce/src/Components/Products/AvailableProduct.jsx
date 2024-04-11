import React, { useContext } from 'react'
import Card from '../UI/Card'
import ProductContext from '../../store/Product/ProductContext'

function AvailableProduct() {
    const productCtx = useContext(ProductContext);

  return (
    <div className='flex justify-center items-center'>
        <ul className='grid grid-cols-2 gap-4 list-none'>
            {productCtx.products.map(item => {
                //console.log(item.imageUrl);
                return (
                <li key={item.id}>
                    <Card id={item.id} title={item.title} price={item.price} image={item.imageUrl} />
                </li>
            )})}
        </ ul>
    </div>
  )
}

export default AvailableProduct

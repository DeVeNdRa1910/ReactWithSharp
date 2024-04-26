import React from 'react'
import ProductItem from './ProductItem'


const dummyProducts = [
  {
    id:'p1' , 
    price: 249 , 
    title: 'My First Book' , 
    description: 'The first book I ever wrote'
  },
  {
    id:'p2' , 
    price: 449 , 
    title: 'My second Book' , 
    description: 'The second book I ever wrote'
  },
  {
    id:'p3' , 
    price: 349 , 
    title: 'My Third Book' , 
    description: 'The third book I ever wrote'
  },
  {
    id:'p4' , 
    price: 449 , 
    title: 'My Fourth Book' , 
    description: 'The fourth book I ever wrote'
  },
  {
    id:'p5' , 
    price: 549 , 
    title: 'My Fifth Book' , 
    description: 'The fifth book I ever wrote'
  },
  {
    id:'p6' , 
    price: 649 , 
    title: 'My Sixth Book' , 
    description: 'The sixth book I ever wrote'
  },
  {
    id:'p7' , 
    price: 649 , 
    title: 'My Seventh Book' , 
    description: 'The seventh book I ever wrote'
  },
  {
    id:'p8' , 
    price: 849 , 
    title: 'My Eatth Book' , 
    description: 'The eatth book I ever wrote'
  },
  {
    id:'p9' , 
    price: 849 , 
    title: 'My Nineth Book' , 
    description: 'The nineth book I ever wrote'
  },
  {
    id:'p10' , 
    price: 999 , 
    title: 'My Tenth Book' , 
    description: 'The tenth book I ever wrote'
  },
];


function Products() {
  return (
    <section>
        <h2 className='text-white text-4xl font-bold my-4 py-4 mx-auto text-center uppercase'>Buy your favorite products</h2>
        <ul className='list-none'>
          {
            dummyProducts.map(product => (
              <ProductItem 
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            ))
          }
        </ul>
    </section>
  )
}

export default Products
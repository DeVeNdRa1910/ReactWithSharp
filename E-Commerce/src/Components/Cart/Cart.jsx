import React from 'react'
import Button from 'react-bootstrap/Button';


function Cart() {

    const cartElements = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 2,
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 3,
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 1,    
        }
    ]

  return (
    <div>
      <ul>
        {
            cartElements.map(item => (
                <li key={item.title}>
                    <div>
                        <img src={item.imageUrl} style={{ width: '5rem' }} alt="" />
                        <h6>{item.title} : {item.quantity}</h6>
                    </div>
                    <div>Price: x{item.price}₹</div>
                    <div>{item.quantity}{ } : { }
                    <Button variant="outline-danger" className=''>REMOVE</Button>
                    </div>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Cart

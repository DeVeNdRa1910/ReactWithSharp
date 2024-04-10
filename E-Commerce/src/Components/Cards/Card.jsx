import React from 'react'

function Card() {

    const productsArr = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',  
        },
        {
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }    
    ]

  return (
    <div>
            {
                productsArr.map(item => (
                    <div  key={item.title}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={item.imageUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <h2 className="card-text">PRICE: {item.price}</h2>
                                <button href="#" className="btn btn-primary">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                ))
            }
    </div>
  )
}

export default Card

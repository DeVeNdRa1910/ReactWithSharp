import React from "react";

const ProductContext = React.createContext({
    products: [
            {
                id: 1,
                title: 'Colors',
                type: "MUSIC",
                price: 100,
                imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            },
            {
                id: 2,
                title: 'Black and white Colors',
                type: "MUSIC",
                price: 50,
                imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            },
            {
                id: 3,
                title: 'Yellow and Black Colors',
                type: "MUSIC",
                price: 70,
                imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            },
            {
                id: 4,
                title: 'Blue Color',
                type: "MUSIC",
                price: 100,
                imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
            }
        ],
    MERCH: [],
    addProduct: (id)=>{},
    removeProduct: (id)=>{}
})

export default ProductContext;
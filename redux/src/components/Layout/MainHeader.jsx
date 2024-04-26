import React from 'react'
import CartButton from '../Cart/CartButton'

function MainHeader(props) {
  return (
    <header className='w-full h-16 px-[10%] flex justify-between items-center bg-stone-700'>
        <h1 className='text-white text-3xl font-bold'>ReduxCart</h1>
        <nav>
            <ul className='list-none'>
                <li>
                    <CartButton />
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader
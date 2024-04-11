import React from 'react'

function Header(props) {
  return (
    <nav className='flex justify-between items-center mb-0.5 bg-black text-white w-full sticky'>
      <div className='flex justify-between px-10 py-2'>
        <a href="/" className='px-3 mx-2 border border-black hover:border-white hover:rounded-xl'>HOME</a>
        <a href="/" className='px-3 mx-2 border border-black hover:border-white hover:rounded-xl'>STORE</a>
        <a href="/" className='px-3 mx-2 border border-black hover:border-white hover:rounded-xl'>ABOUT</a>
      </div>
      <div className='flex justify-end'>
        <button onClick={props.onShowCart} className='mr-10 px-4 py-1 my-2 border-2 border-blue-400 rounded-xl hover:border-blue-600 shadow-xl'>CART</button>
      </div>
    </nav>
  )
}

export default Header

import React from 'react'

function Card(props) {
  return (
    <div className='flex justify-center mt-4'>
      <div className='bg-gray-200 w-5/6 px-8 rounded-2xl'>
        {props.children}
      </div>
    </div>
  )
}

export default Card

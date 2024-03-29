import React from 'react'

function Card(props) {
  return (
    <div className='flex justify-center'>
        <div className='bg-white w-4/5 px-8 rounded-2xl'>
            {props.children}
        </div>
    </div>
  )
}

export default Card

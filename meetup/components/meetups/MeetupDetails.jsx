import React from 'react'

function MeetupDetails(props) {
  return (
    <div className='text-center'>
      <img className='w-full' src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>T{props.description}</p>
    </div>
  )
}

export default MeetupDetails

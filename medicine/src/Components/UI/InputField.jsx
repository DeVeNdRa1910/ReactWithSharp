import React from 'react'

const Input = React.forwardRef((props, ref) =>  {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}:</label>
      <input ref={ref} {...props.input} type={props.type} className='mx-2 px-2 rounded-lg'/>
    </div>
  )
})

export default Input

import React from 'react'

const InputField = React.forwardRef((props, ref) => {
  return (
    <div>
      <label className='mr-2' htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} className='bg-slate-200 py-2 px-2 rounded-2xl shadow-2xl border-2 hover:border-black'/>
    </div>
  )
})

export default InputField

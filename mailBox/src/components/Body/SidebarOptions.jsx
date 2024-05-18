import React from 'react'

function SidebarOptions(props) {

    const active = props.isActive

  return (
    <div>
        {active? <div className='flex justify-between bg-stone-700 py-1 rounded-md text-lg px-3 hover:px-2 border-b border-b-zinc-800 mx-2 mt-2 pb-1'>
            <h5 className='text-sm font-bold'>{props.title}</h5>
            <h3 className='text-xs font-bold opacity-100' >{props.number}</h3>
        </div> : <div className='flex justify-between hover:cursor-pointer hover:bg-stone-600 rounded-md py-0.5 text-lg px-3 hover:px-2 border-b border-b-zinc-800 mx-2 mt-2 pb-1'>
            <h5 className='text-sm'>{props.title}</h5>
            <h3 className='text-xs opacity-0' >{props.number}</h3>
        </div> }
        
    </div>
  )
}

export default SidebarOptions

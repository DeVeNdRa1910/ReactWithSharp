import React from 'react'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { MdLabelImportantOutline } from "react-icons/md";



function EmailBody({name, subject, msg, time}) {
  return (
    <div className='text-sm flex items-center border-b border-b-zinc-800 px-2 py-1 min-h-10 hover:shadow-xl hover:cursor-pointer opacity-85 hover:opacity-100'>
      <div className='left flex gap-2 items-center min-w-60 flex-[20%]  '>
        <MdOutlineCheckBoxOutlineBlank />
        <FaRegStar />
        <MdLabelImportantOutline />
        <h4 className='opacity-100'>{name}</h4>
      </div>
      <div className='middel flex items-center flex-[70%]'>
        <div className='msg text-xs flex-[90%] max-w-lg'>
            <p className='whitespace-nowrap overflow-hidden truncate'><b>{subject} </b>{msg}</p>
        </div>
      </div>
      <div className='right text-right flex-[10%]'>
        <p className='text-xs'>{time}</p>
      </div>
    </div>
  )
}

export default EmailBody

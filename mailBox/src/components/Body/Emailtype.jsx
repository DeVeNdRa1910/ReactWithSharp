import React from 'react'
import { FaInbox } from "react-icons/fa6"
import { IoIosPeople } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";

function Emailtype() {
  return (
    <div>
        <div className='text-sm flex gap-5 mt-2 border-b border-b-white pb-1'>
            <div className='flex items-center gap-2 hover:bg-zinc-700 px-4 py-1 rounded-sm'>
                <FaInbox />
                <p>Primary</p>
            </div>
            <div className='flex items-center gap-2 hover:bg-zinc-700 px-4 py-1 rounded-sm'>
                <IoIosPeople />
                <p>Social</p>
            </div>
            <div className='flex items-center gap-2 hover:bg-zinc-700 px-4 py-1 rounded-sm'>
                <MdLocalOffer />
                <p>Promotions</p>
            </div>
        </div>
      
    </div>
  )
}

export default Emailtype

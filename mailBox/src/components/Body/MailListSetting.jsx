import React from 'react'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdRefresh } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function MailListSetting() {
  return (
    <div className='w-full'>
        <div className='flex justify-between sticky top-0 text-sm'>
          <div className='left flex gap-2'>
            <MdOutlineCheckBoxOutlineBlank />
            <IoIosArrowDown />
            <IoMdRefresh />
            <SlOptionsVertical />
          </div>
          <div className='right flex gap-2'>
            <MdKeyboardArrowLeft />
            <MdKeyboardArrowRight />
          </div>
        </div>
    </div>
  )
}

export default MailListSetting

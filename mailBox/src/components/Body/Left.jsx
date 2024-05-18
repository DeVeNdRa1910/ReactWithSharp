import React from 'react'
import SidebarOptions from './SidebarOptions'
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../../store/features/MailSlice';
import { FaPen } from "react-icons/fa";

function Left(props) {

  const dispatch = useDispatch();

  const composeAction = () => {
    dispatch(openSendMessage())
  }

  return (
    <div className='stick left-0 w-[15%] flex-col min-h-screen'>
      <div className='border border-zinc-700 py-4 h-[100%] flex flex-col'>
        <button className='bg-blue-500 hover:bg-blue-700 w-[90%] mx-2 py-1 px-8 my-1 text-center rounded-sm flex justify-around items-center' onClick={composeAction} ><FaPen/>compose</button>
        <button onClick={()=>props.setSubCollect("Inbox")}>
          <SidebarOptions title={"Inbox"} number={"224"} isActive={true}/>
        </button>
        <button onClick={()=>props.setSubCollect("Inbox")}>
          <SidebarOptions title={"Unread"}  number={"224"}/>
        </button>
        <button onClick={()=>props.setSubCollect("Inbox")}>
          <SidebarOptions title={"Stared"}  number={"224"}/>
        </button>
        <button onClick={()=>props.setSubCollect("Inbox")}>
          <SidebarOptions title={"Spam"}  number={"224"}/>
        </button>
        <button onClick={()=>props.setSubCollect("Inbox")}>
          <SidebarOptions title={"Deleted Items"}  number={"224"}/>
        </button>
        <button onClick={()=>props.setSubCollect("Send")}>
          <SidebarOptions title={"Send"} number={"224"}/>
        </button>
      </div>
    </div>
  )
}

export default Left

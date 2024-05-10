import React from 'react'
import SidebarOptions from './SidebarOptions'



function Left(props) {


  return (
    <div className='stick left-0 z-10 w-[15%] flex-col min-h-full'>
      <div className='border border-zinc-700 py-4 h-[100%]'>
        <button className='bg-blue-700 w-[90%] mx-2 py-1 px-8 my-1 text-center rounded-sm' onClick={props.handleCompose} >+compose</button>
        <SidebarOptions title={"Inbox"} number={"224"} isActive={true}/>
        <SidebarOptions title={"Unread"} number={"224"}/>
        <SidebarOptions title={"Stared"} number={"224"}/>
        <SidebarOptions title={"Drafts"} number={"224"}/>
        <SidebarOptions title={"Sent"} number={"224"}/>
        <SidebarOptions title={"Archive"} number={"224"}/>
        <SidebarOptions title={"Spam"} number={"224"}/>
        <SidebarOptions title={"Deleted Items"} number={"224"}/>

      </div>
    </div>
  )
}

export default Left

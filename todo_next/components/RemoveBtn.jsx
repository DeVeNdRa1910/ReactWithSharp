'use client'
import React from 'react'
import { MdDelete } from "react-icons/md";
import { useRouter } from 'next/navigation';

function RemoveBtn({id}) {
  const router = useRouter()
  const removeTodo = async () =>{
    const confirmed = confirm("Are You Sure")
    
    if(confirmed){
      const resp = await fetch(`http://localhost:3000/api/todos?id=${id}`, {
        method: "DELETE"
      })

      if(resp.ok){
        router.refresh()
      }
    }
  
  }

  return (
    <button onClick={removeTodo} className='text-red-500'>
      <MdDelete size={24} />
    </button>
  )
}

export default RemoveBtn

'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function page() {

  const router = useRouter()

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!title || !desc){
      alert("title and description are required")
      return
    }
    try {
      const resp = await fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body:JSON.stringify({
          title: title,
          description: desc
        })
      });
      if(resp.ok){
        router.push('/')
      } else{
        throw new Error("Unable to create TOdo")
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <form className='flex flex-col ' onSubmit={handleSubmit}>
      <input 
        onChange={(e)=>{setTitle(e.target.value)}}
        className=' rounded-lg border-2 border-zinc-700 px-8 py-2 outline-none '
        type="text" 
        placeholder='Add Todo Title'
      />
      <textarea  
        onChange={(e)=>{setDesc(e.target.value)}}
        className='mt-3 rounded-lg  border border-zinc-700 px-8 py-2 outline-none '
        type="text" 
        placeholder='Add Todo Description'
      />
      <button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit mt-3 rounded-md text-center'>Add TODO</button>
    </form>
  )
}

'use client'
import React from 'react'
import RemoveBtn from './RemoveBtn'
import { useState } from 'react';
import { MdModeEditOutline } from "react-icons/md";
import Link from 'next/link';
import { ImRadioUnchecked } from "react-icons/im";
import { FaCheckCircle } from "react-icons/fa";

const getTodos = async () => {

  try {
    const resp =  await fetch('http://localhost:3000/api/todos', {
      cache: 'no-store'
    })
    if(!resp.ok){
      throw new Error("Failed to fetch todos")
    }
    const data = await resp.json()
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function TopicList() {

  const {todos} = await getTodos()
  const [checked, setChecked] = useState(false)

  const checkHandler = () =>{
    setChecked(prev => !prev)
  }

  return (
    <>
      <button onClick={checkHandler}>
        {checked ? (<FaCheckCircle />) : (<ImRadioUnchecked />) }
      </button>
      
      {
        todos.map(item => (
          <div key={item._id} className='rounded-md p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
            <div >
              {
                checked ? (
                  <>
                    <h2 className= 'font-bold text-2xl truncate' >{item.title}</h2>
                    <div className='truncate'>{item.description}</div>
                  </>
                ) : (
                  <>
                    <h2 className= 'font-bold text-2xl' >{item.title}</h2>
                    <div>{item.description}</div>
                  </>
                )
              }
              
            </div>
            <div className='flex justify-between gap-5 items-start'>
              <RemoveBtn id={item._id}/>
              <Link href={`/editTodo/${item._id}`}>
                <MdModeEditOutline size={24} />
              </Link>
            </div>
          </div>
        ))
      }
      
    </>
  )
}

export default TopicList

import React, {useRef} from 'react'
import Editor from './Editor'

function Home() {

  const toRef = useRef("")
  const subjectRef = useRef("")
  const mailRef = useRef("")

  const submitHandler = () =>{
    e.preventDefault();
    const to = toRef.current.value;
    const subject = subjectRef.current.value;
    const mail = mailRef.current.value;
    
    console.log(to ,"ko", subject, "ke regarding" , mail , "bheja gaya");
  }

  return (
    <div className='p-16'>
        <form onSubmit={submitHandler}>
          <div className=' flex border-b border-white pb-3 mt-5'>
            <label className='text-zinc-500 text-2xl font-semibold pr-6 ' htmlFor="">To: </label>
            <input className='w-full bg-transparent outline-none' type="email" />
          </div>
          <div className=' flex border-b border-white pb-3 mt-5'>
            <label className='text-zinc-500 text-2xl font-semibold pr-6 ' htmlFor="Subject">Subject: </label>
            <input className='w-full bg-transparent outline-none' type="text" />
          </div>
          <Editor />
          <button className='bg-blue-600 hover:bg-blue-800 py-1 px-6 my-5 rounded-lg border border-white' type='submit'>send</button>
        </form>
    </div>
  )
}

export default Home

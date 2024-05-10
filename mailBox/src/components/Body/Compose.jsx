import React from 'react'
import { useRef, useState } from 'react'
import JoditEditor from 'jodit-react'
import { FaMinus } from "react-icons/fa6";
import { LuMaximize2 } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

function Compose() {

    const editor = useRef(null);
    const [content, setContent] = useState("");

    const toRef = useRef("")
    const subjectRef = useRef("")

    const submitHandler = (e) => {
        e.preventDefault();
        const to = toRef.current.value;
        const subject = subjectRef.current.value;
        const mail = content;

        console.log(to, "ko", subject, "ke regarding", mail, "bheja gaya");

        toRef.current.value = ""
        subjectRef.current.value = ""
        setContent("")
    }

    return (

        <div className='flex justify-center items-center h-full  '>
            <div className='w-[70%] h-[50%]' >
                <div className='header flex justify-between items-center px-3 bg-zinc-800 text-white py-1 rounded-t-lg '>
                    <div className='left'>
                        <h3>New Message</h3>
                    </div>
                    <div className='right flex gap-2 justify-between items-center '>
                        <div className='hover:bg-stone-600 rounded-full p-1.5' ><FaMinus /></div>
                        <div className='hover:bg-stone-600 rounded-full p-1.5' ><LuMaximize2 /></div>
                        <div className='hover:bg-stone-600 rounded-full p-1.5' ><IoClose /></div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className=' w-full h-full bg-stone-800  rounded-b-lg'>
                        <form onSubmit={submitHandler}>
                            <div className=' flex border-b border-white pb-2 mt-2 mx-3'>
                                <label className='text-zinc-500 text-sm font-semibold pr-6 ' htmlFor="">To: </label>
                                <input ref={toRef} className='w-full text-sm bg-transparent outline-none ' type="email" />
                            </div>
                            <div className=' flex border-b border-white pb-2 mt-2 mx-3'>
                                <label className='text-zinc-500 text-sm font-semibold pr-6 ' htmlFor="Subject">Subject: </label>
                                <input ref={subjectRef} className='w-full text-sm bg-transparent outline-none' type="text" />
                            </div>
                            <div className='mx-3'>
                                <JoditEditor
                                    className='text-black my-3'
                                    ref={editor}
                                    value={content}
                                    onChange={newContent => setContent(newContent)}
                                />
                            </div>
                            <div className='flex justify-center'>
                                <button className='bg-blue-600 hover:bg-blue-800 py-0.5 px-6 rounded-lg border border-white' type='submit'>SEND</button>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Compose

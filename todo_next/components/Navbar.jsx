 import Link from 'next/link'
import React from 'react'
 
 function Navbar() {
   return (
     <nav className=' rounded-md flex justify-between items-center bg-zinc-800 px-8 py-3 z-50 sticky'>
       <Link href={'/'} className='text-3xl text-white font-bold hover:underline'>Home</Link>
       <Link href={'/addTodo'} className='bg-white p-2 rounded-lg font-semibold' >Add Todo</Link>
     </nav>
   )
 }
 
 export default Navbar
 
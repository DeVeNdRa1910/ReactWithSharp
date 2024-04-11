import React from 'react'
import Header from '../UI/Header'
import chaarBotal from '../../../public/HoneySing/ChaarBotal.mp3'

function Music() {
  return (
    <div>
        <Header />
        <div className='bg-gray-600 text-white'>
            <h1 className='text-white py-10 pt-10 text-8xl text-center'>The Generics</h1>
            <h3 className='text-center text-3xl border-2 border-blue-500 mx-96 pt-1 pb-2 rounded-lg'>Get Our Latest Album</h3>
            <div className='flex justify-evenly'>
                <button>
                    <img className='w-24 h-24' src="https://img.icons8.com/?size=80&id=t294OHA3a4ko&format=png"/>
                </button>
            </div>
        </div>
        <div>
            <audio src={chaarBotal}>O mere dil ke chain</audio>
        </div>
    </div>
  )
}

export default Music

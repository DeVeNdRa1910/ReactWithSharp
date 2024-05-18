import React, { useState } from 'react'
import Header from '../Body/Header'
import Left from '../Body/Left'
import MailList from '../Body/MailList'



function Home() {

  const [subCollection, setSubCollection] = useState("")


  return (
    <div>
      <div className='top-0 sticky z-10 h-full mb-3'>
        <Header />
      </div>
      <div className='flex justify-between'>
        <Left setSubCollect={setSubCollection}/>
        <MailList subCollect={subCollection} />
      </div>
    </div>
  )
}

export default Home

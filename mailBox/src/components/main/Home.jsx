import React, { useEffect, useState } from 'react'
import Header from '../Body/Header'
import Left from '../Body/Left'
import Compose from '../Body/Compose'
import MailList from '../Body/MailList'

function Home() {

  const [showCompose, setShowCompose] = useState(false)

  const composeHandler = () => {
    setShowCompose(prev => !prev);
  }

  return (
    <div>
        <div className='p-2 top-0 sticky z-10 h-full'>
          <Header/>
        </div>
        <div className='flex justify-between'>
          <Left handleCompose={composeHandler}/>
          <MailList compose={showCompose}/>
        </div>

    </div>
  )
}

export default Home

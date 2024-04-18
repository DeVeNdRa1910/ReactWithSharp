import React, { useContext, useState } from 'react'
import VoteContext from '../store/voteContext'
import VoteConsole from './VoteConsole'

function Header() {

  const [showConsole , setShowConsole] = useState(false)
  
  const showConsoleHandler = () => {
    setShowConsole(prev=> !prev)
  }
  const hideConsoleHandler = () => {
    setShowConsole(false)
  }

  const voteCtx = useContext(VoteContext);

  return (
    <div>
        <div className='flex justify-center text-center'>
          <div>
            <h1 className='text-5xl font-extrabold'>Class Monitor Voting</h1>
            <h3 className='text-3xl my-1'>Total Votes : {voteCtx.votes.length}</h3>
            {console.log("Header" ,voteCtx.votes)}
            <button onClick={showConsoleHandler} className='border border-black bg-gray-700 text-white px-10 py-1 rounded-lg'>Add New Vote</button>
          </div>
        </div>
        {showConsole && <VoteConsole onHide={hideConsoleHandler} />}
    </div>
  )
}

export default Header

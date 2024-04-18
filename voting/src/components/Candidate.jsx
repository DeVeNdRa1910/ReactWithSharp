import React, { useContext } from 'react'
import CandidateContextProvider from '../store/CandidateContext/CandidateContextProvider'
import CandidateContext from '../store/CandidateContext/CandidateContext'
import VoteContext from '../store/voteContext';

function Candidate() {
  const candidateCtx = useContext(CandidateContext);
  const voteCtx = useContext(VoteContext);



  return (
    <CandidateContextProvider>
      <ul>
        {
          candidateCtx.candidates.map(candidate => {
            const totalVotes = voteCtx.votes.filter(vote => vote.candidateId === candidate.candidateId);
            console.log(totalVotes);
            console.log("number of total votes for ",candidate.name, "is" , totalVotes.length);
            return (
                    <div key={candidate.candidateId} className='border-b-2 border-black mx-3'>
                      <li  className='list-none pl-5 py-1'>
                          <h1 className='text-3xl font-bold'>{candidate.name}</h1>
                          <h3 className='text-xl font-semibold'>Total Votes : {totalVotes.length}</h3>
                      </li>
                      <ul className='pb-1'>
                        {
                          totalVotes.map(vote => (
                            <li key={vote.voterId} className='list-none flex justify-start ml-10 my-1'>
                              <h4 className='mr-6 font-semibold text-xl'>{vote.name} : </h4>
                              <button onClick={() => voteCtx.deleteVote(vote.voterId)} className='border border-black bg-gray-700 text-white px-3 rounded-lg'>Delete</button>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
            )
          })
        }
      </ul>
    </CandidateContextProvider>
  )
}

export default Candidate

import React, { useContext, useRef } from 'react'
import CandidateContext from '../store/CandidateContext/CandidateContext'
import VoteContext from '../store/voteContext';
import { parse } from 'postcss';

function VoteConsole(props) {
    const voterNameRef = useRef("")
    const candidateIdRef = useRef(0)
    const voterRollRef = useRef(0)

    const candidateCtx = useContext(CandidateContext);
    const voteCtx = useContext(VoteContext)



    const newVoteHandler = () => {
        const voter = voterNameRef.current.value;
        const candidate = parseInt(candidateIdRef.current.value);
        const voterId = voter+candidate
        const rollNoInput = parseInt(voterRollRef.current.value);

        if(voter===""){
            alert("Please Enter Valid Name");
            return;
        }

        const rollNoList = voteCtx.votes.map(item => item.rollNo);
        if(rollNoList.includes(rollNoInput)){
            alert("You was already voted");
            voterRollRef.current.value= parseInt("");
            voterNameRef.current.value= "";
            return;
        }

        voterRollRef.current.value= parseInt("");
        voterNameRef.current.value= "";

        const newVote = {
            voterId: voterId,
            rollNo: rollNoInput,
            name: voter,
            candidateId: candidate
        }
        console.log(voteCtx.votes);
        voteCtx.addVote(newVote)
        console.log(voteCtx.votes);
    }

  return (
    <div className='z-30 flex justify-around bg-gray-400 py-5 my-3 mx-10 border-2 border-black rounded-2xl'>
        <div>
            <input className='rounded-lg py-1 px-5' ref={voterNameRef} type="text" placeholder='Enter Your Name'/>
        </div>
        <div>
            <input className='rounded-lg py-1 px-5' ref={voterRollRef} type="number" placeholder='Enter Your Roll No.'/>
        </div>
        <div>
            <select className='rounded-lg py-1 px-5' ref={candidateIdRef} name="" id="">
                {
                    candidateCtx.candidates.map(candidate => (
                        <option key={candidate.candidateId}  value={candidate.candidateId}>{candidate.name}</option>
                    ))
                }
            </select>
        </div>
        <div>
            <button onClick={newVoteHandler} className='border border-black bg-gray-700 text-white px-10 py-1 rounded-lg'>VOTE</button>
        </div>
        <div>
            <button className=' bg-gray-700 text-white px-10 py-1 rounded-lg' onClick={props.onHide}>X</button>
        </div>
    </div>
  )
}

export default VoteConsole

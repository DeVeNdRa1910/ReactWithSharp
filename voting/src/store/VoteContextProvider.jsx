import React, { createContext, useContext, useState } from 'react';
import VoteContext from './voteContext';

// Create VoteContextProvider component
const VoteContextProvider = ({ children }) => {
  const voteContext = useContext(VoteContext)
  const [votes, setVotes] = useState(voteContext.votes);

  const voteCtx = {
    votes: votes,
    addVote: (vote) => {
      const newVotes = votes.concat(vote)
      setVotes(newVotes)
    },
    deleteVote: (id) => {
      const newVotes = votes.filter(vote => vote.voterId !== id)
      setVotes(newVotes)
    }
    
  }

  updateVote()

  return (
    <VoteContext.Provider value={voteCtx}>
      {children}
    </VoteContext.Provider>
  );
};

export default VoteContextProvider;

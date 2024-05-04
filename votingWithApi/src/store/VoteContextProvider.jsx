import React, { useContext, useEffect, useState } from 'react';
import VoteContext from './voteContext';

const url = "https://studentvoting-96d56-default-rtdb.firebaseio.com/votes.json"

const VoteContextProvider = ({ children }) => {
  const voteContext = useContext(VoteContext);
  const [votes, setVotes] = useState(voteContext.votes);

  const [tempArr, setTempArr] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const voteArray = [];
        for (const key in data) {
          const temp ={
            voteId: key,
            voterInfo: data[key]
          }
          voteArray.push(data[key]);
          const newTempArr = [...tempArr,temp]
          setTempArr(newTempArr)
        }
        setVotes(voteArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const voteCtx = {
    votes: votes,
    addVote: async (vote) => {
      const newVotes = votes.concat(vote);
      setVotes(newVotes);
      const newVote = {
        rollNo: vote.rollNo,
        voterId: vote.voterId,
        name: vote.name,
        candidateId: vote.candidateId
      };
      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(newVote)
        });
        const data = await response.json();
        // console.log(data); // Log the response data if needed
      } catch (error) {
        console.error('Error adding vote:', error);
      }
    },
    deleteVote: async(id) => {
      let tempItem ;
      for (const item of tempArr) {
        console.log(item);
        
          tempItem = item.voteId
        
      }
      console.log(tempArr);
      console.log(tempItem);
      const newVotes = votes.filter(vote => vote.voterId !== id);
      try {
        await fetch(`https://studentvoting-96d56-default-rtdb.firebaseio.com/votes/${tempItem}.json`, {
          method: "DELETE"
        });
        const newVotes = votes.filter(vote => vote.id !== id);
        setVotes(newVotes);
        console.log("Vote deleted:", id);
      } catch (error) {
        console.error('Error deleting vote:', error);
      }
      setVotes(newVotes);
    }
  };

  return (
    <VoteContext.Provider value={voteCtx}>
      {children}
    </VoteContext.Provider>
  );
};

export default VoteContextProvider;

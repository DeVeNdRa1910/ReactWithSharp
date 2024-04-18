import React from "react";

const VoteContext = React.createContext({
    votes: [
        {
            voterId: 'v1',
            name: "Devendra",
            candidateId: 11
        },
        {
            voterId: 'v2',
            name: "vikas",
            candidateId: 33
        }
    ],
    addVote: (item) => {},
    deleteVote: (id)=>{}
})

export default VoteContext;
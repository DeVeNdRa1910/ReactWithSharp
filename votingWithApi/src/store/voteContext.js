import React, { useEffect } from "react";

const VoteContext = React.createContext({
    votes: [],
    addVote: (item) => {},
    deleteVote: (id)=>{}
})

export default VoteContext;
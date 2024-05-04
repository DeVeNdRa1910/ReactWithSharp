import React from 'react'

const CandidateContext = React.createContext({
    candidates: [
        {
            name: "Suresh",
            candidateId: 11
        },
        {
            name: "Divyanshi",
            candidateId: 22
        },
        {
            name: "Abhik",
            candidateId: 33
        }
    ]
})

export default CandidateContext;
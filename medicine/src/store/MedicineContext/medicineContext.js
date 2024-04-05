import React from 'react'

const MedContext = React.createContext({
        meds: [
            {
                id: 'm1',
                name: "PARACETAMOL",
                description: 'used to solve fever',
                price: 29,
                quantityAvailable: 148
            },
            {
                id: 'm2',
                name: "CTZ",
                description: 'used to reliieve runny nose, sneezing, redness, itching..',
                price: 79,
                quantityAvailable: 243
            },
            {
                id: 'm3',
                name: "IBUPROFEN",
                description: 'used to reduce inflammation, reduce swelling, pain, fever',
                price: 69,
                quantityAvailable: 188
            },
            {
                id: 'm4',
                name: "ANTIHITAMINE",
                description: 'used to reduce conjuctivitis, allergies...',
                price: 119,
                quantityAvailable: 28
            },
            {
                id: 'm5',
                name: "ANTIARRYHTHMICS",
                description: 'used to control irregularities of heartbeat',
                price: 1120,
                quantityAvailable: 11
            },
            {
                id: 'm6',
                name: "ANTIBACTERIALS",
                description: 'used to treat infection',
                price: 29,
                quantityAvailable: 78
            },
            {
                id: 'm7',
                name: "ANTIEMETICS",
                description: 'used to nausea and vomiting',
                price: 9,
                quantityAvailable: 127
            },
            {
                id: 'm8',
                name: "COMBIFLAME",
                description: 'used to reduce low fever, pain ...',
                price: 2,
                quantityAvailable: 287
            },
            {
                id: 'm9',
                name: "BARBITURATES",
                description: 'Sleeping drug',
                price: 65,
                quantityAvailable: 56
            }
        ],
        addMed: (item)=>{},
        removeMed: (item)=>{}
    }
)

export default MedContext;
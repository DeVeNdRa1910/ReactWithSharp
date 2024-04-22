import React from "react"

const ExpenseContext = React.createContext({
    exps: [],
    addItem: (item) => {},
    deleteItem: (id) => {},
})

export default ExpenseContext;
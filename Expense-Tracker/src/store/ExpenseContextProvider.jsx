import React from "react";
import { useContext } from "react";
import ExpenseContext from "./ExpenseContext";

function ExpenseContextProvider ({ children }) {
    const expCtx = useContext(ExpenseContext);
    const [expense, setExpense] = useState(expCtx.exps);

    const contextValue = {
        exps: expense,
        addItem: (Item)=>{
            const newExps = expense.concat(Item);
            setExpense(newExps)
        },
        deleteItem: (id) => {
            const newExps = expense.filter(item => item.id !== id)
            setExpense(newExps)
        }
    }

    return (
        <ExpenseContext.Provider value={contextValue}>
            { children }
        </ExpenseContext.Provider>
    )

}

export default ExpenseContextProvider
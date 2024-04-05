import MedContext from './medicineContext'
import { useContext, useReducer } from 'react'

const medArr = useContext(MedContext);

const defaultMedState = {
    meds: medArr
}

const medReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatesQuantityAvailable = action.item.quantityAvailable+1;
        const medIndex = state.meds.findIndex((med) => med.id === action.item.id)
        const medItem = state.meds[medIndex];
        const updatedMed = {...medItem, quantityAvailable: updatesQuantityAvailable}
        let updatedMeds = [...state.meds]
        updatedMeds[medIndex] = updatedMed

        return {
            meds: updatedMeds
        }
    }

    if(action.type === 'REMOVE'){
        const updatesQuantityAvailable = action.item.quantityAvailable-1;
        const medIndex = state.meds.findIndex((med) => med.id === action.item.id)
        const medItem = state.meds[medIndex];
        if(medItem.quantityAvailable === 0){
            alert("Out of Stock")
            return;
        }
        const updatedMed = {...medItem, quantityAvailable: updatesQuantityAvailable}
        let updatedMeds = [...state.meds]
        updatedMeds[medIndex] = updatedMed

        return {
            meds: updatedMeds
        }
    }

    return defaultMedState;
}

const MedContextProvider = (props) => {
    const [medState, dispatchMedAction] = useReducer(medReducer, defaultMedState);

    const addMedicineHandler = (item) => {
        dispatchMedAction({
            type:'ADD',
            item: item
        })
    }

    const removeMedicineHandler = (item) => {
        dispatchMedAction({
            type: 'REMOVE',
            item: item
        })
    }

    const medContext = {
        meds: medState.meds,
        addMed: addMedicineHandler,
        removeMed: removeMedicineHandler
    }

    return (
        <MedContext.Provider value={medContext}>
            {props.children}
        </MedContext.Provider>
    )
}

export default MedContextProvider;
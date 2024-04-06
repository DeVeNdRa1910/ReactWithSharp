import MedContext from './medicineContext'
import { useContext } from 'react'


const MedContextProvider = (props) => {
    const medCtx = useContext(MedContext);

    return (
        <MedContext.Provider value={medCtx}>
            {props.children}
        </MedContext.Provider>
    )
}

export default MedContextProvider;
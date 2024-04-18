import CandidateContext from "./CandidateContext";
import { useContext } from "react";

const CandidateContextProvider = (props) => {
    const CandidateCtx = useContext(CandidateContext);

    return (
        <CandidateContext.Provider value={CandidateContext}>
            {props.children}
        </CandidateContext.Provider>
    )
}

export default CandidateContextProvider;
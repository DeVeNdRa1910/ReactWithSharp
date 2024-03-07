Basic syntax of useReducer().
const [state , dispatch] = useReducer(reducerFn, initialState, initFn);

state-> The state snapshot used in the component rerender/re-evaluation.
dispatchFn -> A function that can be used to dispatch a new action.
reducerFn -> (prevState, action) => newState  -A function that is fire automatically once an action is Dispatch (via dispatchFn()) itr receives  the latest state snapshop and should return the new , updated state.
initialState -> The initial state.
initFn -> A function to set the inital state programmatically.
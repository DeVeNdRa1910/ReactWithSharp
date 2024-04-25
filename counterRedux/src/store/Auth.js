
import { createSlice, configureStore } from '@reduxjs/toolkit'


const initialAuthState = {
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

const authReducer = authSlice.reducer

export const authActions = authSlice.actions;

export default authReducer;













// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'increment') {
//         // we cant do like 
//         /* 
//         state.counter++ 
//         return state
//         */
//        //dont try to mutate state this is rule
//         return {
//             counter : state.counter + 1,
//             showCounter: state.showCounter,
//         }
//     }
//     if(action.type === 'increase') {
//         return {
//             counter : state.counter + action.amount,
//             showCounter: state.showCounter,
//         }
//     }
//     if(action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         }
//     }
//     if(action.type === 'decrease') {
//         return {
//             counter: state.counter - action.amount,
//             showCounter: state.showCounter,
//         }
//     }
//     if(action.type === 'toggle'){
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter,
//         }
//     }

//     return state;
// }

// const store = createStore(counterReducer);

// export default store;
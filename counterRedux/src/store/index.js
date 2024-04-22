import { createStore } from 'redux'

const initialState = {
    counter: 0,
    showCounter: true,
}

// identifire ke typing erro se bachne ke liye ham is file me ek variable banakar use export kar denge

// export const INCREMENT = "increment";
// export const DECREMENT = "decrement";

/* But ab ye karne ki jarurat nahi hai we have redux toolkit */

//redux toolkit me hi redux included hota hai 
import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducer: {
        //every method receive current state and action by default
        increment (state) {
            // now it can allow to mutate the state
            state.counter++;
        },
        decrement (state) {
            state.decrement--;
        },
        //yaha pr action ki jarurat thi last two method me action ki jarurat nhi thi kyuki 1 badana ya ghatana tha But increase or decrease me kitna add ya substract karna hai nahi pata to action ki need to hogi hi.
        increase(state, action) {
            state.counter = state.counter+action.amount;
        },
        decrease(state, action) {
            state.counter = state.counter-action.amount;
        },
        toggleCount(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

// we can configure more then one slice reducer me hi objectpass karke

/* 
const store = configureStore({
    reducer: {
        reducer1: reducer1Slice.reducer
        reducer2: reducer2Slice.reducer
        reducer3: reducer3Slice.reducer
        reducer4: reducer4Slice.reducer
    }
});
*/

const store = configureStore({
    reducer: counterSlice.reducer
});


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

export default store;
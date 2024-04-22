import { createStore } from 'redux'

const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment') {
        return {
            counter : state.counter + 1
        }
    }
    if(action.type === 'incBy5') {
        return {
            counter : state.counter + 5
        }
    }
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    if(action.type === 'decBy5') {
        return {
            counter: state.counter - 5
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;
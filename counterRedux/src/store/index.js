import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth";
import countReducer from "./Counter";


const store = configureStore({
    reducer: {
        counter: countReducer,
        auth: authReducer
    }
})




export default store;
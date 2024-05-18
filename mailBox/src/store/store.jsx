import { configureStore } from "@reduxjs/toolkit";
import mailReducer from './features/MailSlice'

export const store = configureStore({
    reducer: {
        mail: mailReducer,
    }
})
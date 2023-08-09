import { configureStore } from "@reduxjs/toolkit";

import guest from './reducers/guestReducer';
import user from './reducers/userReducer';


export const store = configureStore({
    reducer: {
        guest,
        user
    }
})

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
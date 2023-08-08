import { configureStore } from "@reduxjs/toolkit";
import guest from './reducers/guestReducer';

export const store = configureStore({
    reducer: {
        guest
    }
})

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
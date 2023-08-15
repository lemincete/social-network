import { configureStore } from "@reduxjs/toolkit";

import guest from './reducers/guestReducer';
import user from './reducers/userReducer';
import avatar from './reducers/avatarReducer';


export const store = configureStore({
    reducer: {
        guest,
        user,
        avatar
    }
})

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";

interface IUserReducerState {
    user: IUser | null
}

const initialState: IUserReducerState = {
    user: null
}

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserAction: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },
        logoutUserAction: (state) => {
            state.user = null
        },
    }
})

export const { addUserAction, logoutUserAction } = userReducer.actions;
export default userReducer.reducer;
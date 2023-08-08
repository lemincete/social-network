import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IGuestReducerState {
    isGuest: boolean
}

const initialState: IGuestReducerState = {
    isGuest: true
}

const guestReducer = createSlice({
    initialState,
    name: 'guest',
    reducers: {
        guestChangeAction: (state, action: PayloadAction<boolean>) => {
            state.isGuest = action.payload
        }
    }
})

export const { guestChangeAction } = guestReducer.actions

export default guestReducer.reducer;
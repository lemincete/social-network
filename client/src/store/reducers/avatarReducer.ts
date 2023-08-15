import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAvatarReducerState {
    imageBody: {
        image: string | null | ArrayBuffer,
        previewImage: string | null
    }
}

const initialState: IAvatarReducerState = {
    imageBody: {
        image: '',
        previewImage: null
    }
}

const avatarReducer = createSlice({
    name: "image",
    initialState,
    reducers: {
        addAvatarAction: (state, action: PayloadAction<{ image: string | null | ArrayBuffer, previewImage: string | null }>) => {
            state.imageBody = action.payload;
        },
        deleteAvatarAction: (state) => {
            state.imageBody = { image: null, previewImage: null }
        }
    }
})

export const { addAvatarAction, deleteAvatarAction } = avatarReducer.actions;
export default avatarReducer.reducer;
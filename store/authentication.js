import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login: 'false',
    signed: '',
    tokenId: ' ',
    userId: "1"
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        isLogin(state) {
            state.login = !state.login
        },

        tokenContainer(state, action) {
            state.tokenId = action.payload.tokenId,
                state.userId = action.payload.userId
        }



    }
})

export const authAction = authSlice.actions;

export const authReducers = authSlice.reducer;
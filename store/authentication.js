import {createSlice} from '@reduxjs/toolkit'

const initialState = { 
               login : 'false',
               signed : ''
}

 const authSlice = createSlice({
               name : 'auth',
               initialState : initialState,
               reducers : {
                              isLogin(state ){
                               state.login  = !state.login
                              },
                              
                            

               }
})

export const authAction = authSlice.actions;

export const authReducers = authSlice.reducer;
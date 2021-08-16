import {createSlice} from '@reduxjs/toolkit'

const initialState  = { 

               fileStore : []

}

 export const fileStoreSlice = createSlice({

               name : 'fileStore',
               initialState : initialState,
               reducers:{
                              addFile(state , action){
                                             const fileStore = { 
                                                            id : action.payload.id,
                                                            name:action.payload.name 
                                             }
                                              state.fileStore.push(fileStore);
                              }
               }

})

export const reducersFileStore = fileStoreSlice.reducer

export const actionFileStore = fileStoreSlice.actions;


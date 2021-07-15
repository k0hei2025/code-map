import {createSlice} from '@reduxjs/toolkit'

   const trial= async ()=>{

const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file.json`);
      const resData = await data.json() 
      console.log(resData);  

      }
 
      

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


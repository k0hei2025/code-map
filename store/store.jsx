import {createSlice , configureStore} from '@reduxjs/toolkit'
 

 const initialState = {

  components : [ { 
      id : '1',
      componentName : 'function'
  } ]

   };
 
  const addComponentSlice =  createSlice({
                  name : 'sideBar',
                  initialState:initialState, 
                  reducers : {

                              addComponent(state, action)
                              {
                                  console.log(action.payload);
                                   //tate.components = state.components.push(action.payload)
                              }

                  },
               
   })

   export const addComponentActions = addComponentSlice.actions;
               
  export const store = configureStore({ 
                  reducer : addComponentSlice.reducer
   })

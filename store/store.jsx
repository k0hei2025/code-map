// import {createSlice , configureStore} from '@reduxjs/toolkit'
 

//  const initialState = {
// value:0
//    };
 
//   const addComponentSlice =  createSlice({
//                   name : 'sideBar',
//                   initialState:initialState, 
//                   reducers : {

//                               addComponent(state, action)
//                               {
//                                   state.value+=1;
//                                   console.log(state.value);
//                                    //tate.components = state.components.push(action.payload)
//                               }

//                   },
               
//    })

//    export const addComponentActions = addComponentSlice.actions;
               
//   export const store = configureStore({ 
//                   reducer : addComponentSlice.reducer
//    })
import {createSlice , configureStore,current} from '@reduxjs/toolkit'
 

 const initialState = {
     components:[
    //      {
    //  id:'1',
    //  name:'function'
    //  }
    ],
value:0
   };
 
  const addComponentSlice =  createSlice({
                  name : 'sideBar',
                  initialState:initialState, 
                  reducers : {

                              addComponent(state, action)
                              {
                                  const newComp={
                                      id:action.payload.id,
                                      sideBarObject:action.payload.sideBarObject
                                  }
                                  state.value+=1;
                                  state.components.push(newComp);
                                //   console.log(state.value);
                                  console.log(current(state.components));
                                //   console.log(action.payload)
                                   //tate.components = state.components.push(action.payload)
                              }

                  },
               
   })

   export const addComponentActions = addComponentSlice.actions;
               
  export const store = configureStore({ 
                  reducer : addComponentSlice.reducer
   })

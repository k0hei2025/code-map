import {createSlice,current} from '@reduxjs/toolkit'

 const initialState = {
     components:[]
   };
 
  const addComponentSlice =  createSlice({
                  name : 'addComponent',
                  initialState:initialState, 
                  reducers : {

                              addComponent(state, action)
                              {
                                  const newComp={
                                      id:action.payload.id,
                                      sideBarObject:action.payload.sideBarObject
                                  }
                                  state.components.push(newComp);
                              },
                              removeComponent(state,action)
                              {
                                //   console.log(action.payload)
                               const newComponents=state.components.filter(val=>{
                                    //   val.id===action.payload.val.sideBarObject.id
                                    console.log(val.id)
                                    // console.log(action.payload.val.id)
                                  })
                                  state.components=newComponents
                            // state.components=state.components.splice()
                              }

                  },
               
   })
   export const addComponentActions = addComponentSlice.actions;
export default addComponentSlice.reducer;

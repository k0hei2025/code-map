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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
=======

>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
                                let newComponent=[];
                                     state.components.filter(val=>{
                                    if(val.id!==action.payload.val.id){
                                      newComponent.push(val)
                                    }
                                      console.log(val.id!==action.payload.val.id)
                                  })
                                  state.components=newComponent
                                  console.log(state.components)
<<<<<<< HEAD
<<<<<<< HEAD
=======
 
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
=======
 
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
                              }

                  },
               
   })
   export const addComponentActions = addComponentSlice.actions;
export default addComponentSlice.reducer;

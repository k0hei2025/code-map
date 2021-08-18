<<<<<<< HEAD
import {createSlice,current} from '@reduxjs/toolkit'
=======

import {createSlice,current} from '@reduxjs/toolkit'
 
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68


const initalState = { 
               
<<<<<<< HEAD
       dataContainer : [],
       title:'Project'        
=======

       dataContainer : [],
       title:'Project'        
 
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
}

const mapData = createSlice({
                name: 'mapData',
                initialState: initalState,
                reducers:   {
<<<<<<< HEAD
                               addData(state , action) {
=======

                               addData(state , action) {
 
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
                                  const dataList =  {  
                                     id  : action.payload.id ,
                                     fileName :  action.payload.fileName
                                  }
<<<<<<< HEAD
=======


>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
                                  state.dataContainer.push(dataList);  
                               },
                               updateData(state,action) {
                                  const list=action.payload
                                  state.dataContainer[list.id]=list.title
                              },
                              deleteData(state,action){
<<<<<<< HEAD
                                  let newContainer=[];
                                 // state.dataContainer.filter((val)=>{
                                 //      if(val.id!==action.payload.val.id){
                                 //         newContainer.push(val)
                                 //      }
                                 // })
                                  console.log( 'clicked Id', action.payload.id);
                                 // state.dataContainer.map((val)=>{
                                 //    console.log(val.id);
                                 //    if (val.id === action.payload.id){
                                 //       console.log(val.id);
                                 //       state.dataContainer.pop(val);
                                 //       console.log('deleted' , val.id);
                                 //      console.log( state.dataContainer.map((i)=>{
                                 //         console.log(i.id);
                                 //      }));
                                 //    }
                                    
                                 //    // else {
                                 //    //    console.log('err');
                                 //    // }
                                 // })

                                 state.dataContainer.filter((val)=>{
                                    
                                    if ( (val.id === action.payload.id) === false ){
                                      state.dataContainer = [...val];
                                      console.log(state.dataContainer)
                                    }
                                    
                                 })
                                   
=======
                                 let newContainer=[];
                                 state.dataContainer.filter((val)=>{
                                      if(val.id!==action.payload.val.id){
                                         newContainer.push(val)
                                      }
                                 })
                                 state.dataContainer=newContainer
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
                              },
                              changeTitle(state,action) {
                                 state.title=action.payload;
                              }
<<<<<<< HEAD
=======
 
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
                               
                }
                
})

// action 

 export const mapDataAction = mapData.actions

// reducer

 export const mapDataReducer = mapData.reducer

 
import {createSlice  } from '@reduxjs/toolkit'


const initalState = { 
               
       dataContainer : []        
}

const mapData = createSlice({
                name: 'mapData',
                initialState: initalState,
                reducers:   {
                               addData(state , action){
                                  const dataList =  {  
                                     id  : action.payload.id ,
                                     fileName :  action.payload.fileName
                                  }
                                  state.dataContainer.push(dataList);
                                  console.log(state.dataContainer)  
                               },
                               
                }
                
})

// action 

 export const mapDataAction = mapData.actions

// reducer

 export const mapDataReducer = mapData.reducer

 
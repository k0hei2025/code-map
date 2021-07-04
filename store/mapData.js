import {createSlice,current} from '@reduxjs/toolkit'


const initalState = { 
               
       dataContainer : []        
}

const mapData = createSlice({
                name: 'mapData',
                initialState: initalState,
                reducers:   {
                               addData(state , action) {
                                  const dataList =  {  
                                     id  : action.payload.id ,
                                     fileName :  action.payload.fileName
                                  }
                                  state.dataContainer.push(dataList);
                                 //  console.log(state.dataContainer)  
                               },
                               updateData(state,action) {
                                  const list=action.payload
                                  state.dataContainer[list.id]=list.title
                                 //  console.log(current(state.dataContainer))
                                 // console.log(state.dataContainer[list.id])
                              },
                              deleteData(state,action){
                                 // state.dataContainer.filter((val)=>{
                                 //      val.id!==action.payload.id
                                 // })
                                 console.log(current(state.dataContainer))
                              }
                               
                }
                
})

// action 

 export const mapDataAction = mapData.actions

// reducer

 export const mapDataReducer = mapData.reducer

 
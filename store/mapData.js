import {createSlice,current} from '@reduxjs/toolkit'


const initalState = { 
               
       dataContainer : [],
       title:'Project'        
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
                               },
                               updateData(state,action) {
                                  const list=action.payload
                                  state.dataContainer[list.id]=list.title
                              },
                              deleteData(state,action){
                                
                                 // state.dataContainer.filter((val)=>{
                                 //    if (val.id === action.payload.id){
                                 //       console.log(val.fileName , val.id)
                                 //    }
                                 //    console.log(val.id , val.fileName)
                                 // })

                               state.dataContainer =   state.dataContainer.filter(key=> key.id !== action.payload.id)

                               console.log(state.dataContainer)

                                 }

                              //   console.log('after the condition', current (state.dataContainer))

                                 //  newContainer = state.dataContainer.splice(idx, 1);

                                 // state.dataContainer = newContainer;
 
                                 // console.log(state.dataContainer)
                                   
                              ,
                              changeTitle(state,action) {
                                 state.title=action.payload;
                                 console.log(state.title)
                              }
                               
                }
                
})

// action 

 export const mapDataAction = mapData.actions

// reducer

 export const mapDataReducer = mapData.reducer

 
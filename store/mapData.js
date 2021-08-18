
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
                                   

                                 let newContainer=[];
                                 state.dataContainer.filter((val)=>{
                                      if(val.id!==action.payload.val.id){
                                         newContainer.push(val)
                                      }
                                 })
                                 state.dataContainer=newContainer

                              },
                              changeTitle(state,action) {
                                 state.title=action.payload;
                              }

                               
                }
                
})

// action 

 export const mapDataAction = mapData.actions

// reducer

 export const mapDataReducer = mapData.reducer

 
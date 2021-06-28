import {useState} from 'react'

const [state , setState] = useState([{
               id : null,
               containerName :null,
    }])
               
   export const reducer= (state , action)=>{
      switch(action.type){
                     case 'GET_CONTAINER' :{
                // statemet
                return { ...state }
                     }
                     break;
                     default: {
                                    return state ;
                     } 
      }             
    }

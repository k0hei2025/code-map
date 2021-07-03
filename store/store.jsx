
import {configureStore} from '@reduxjs/toolkit'
import addComponentReducer from './addComponentSlice'
import {mapDataReducer} from './mapData'


               
  export const store = configureStore({ 
                  reducer : {
                    component:addComponentReducer,
                    mapData: mapDataReducer
                  }
                  
   })

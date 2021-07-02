import {configureStore} from '@reduxjs/toolkit'
import addComponentReducer from './addComponentSlice'


               
  export const store = configureStore({ 
                  reducer : {component:addComponentReducer}
   })

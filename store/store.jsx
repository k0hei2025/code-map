
import {configureStore} from '@reduxjs/toolkit'
import addComponentReducer from './addComponentSlice'
import {mapDataReducer} from './mapData'
import {fileStoreSlice} from './addFile'

               
  export const store = configureStore({ 
                  reducer : {
                    component:addComponentReducer,
                    mapData: mapDataReducer,
                    fileStore : fileStoreSlice.reducer
                  }
                  
   })

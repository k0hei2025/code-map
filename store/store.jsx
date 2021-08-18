
import {configureStore} from '@reduxjs/toolkit'
import addComponentReducer from './addComponentSlice'
import {mapDataReducer} from './mapData'
import {fileStoreSlice} from './addFile'
import {authReducers} from './authentication'
<<<<<<< HEAD
<<<<<<< HEAD
import editorDataReducer from './editorDataSlice'               

=======
               
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
=======
               
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
  export const store = configureStore({ 
                  reducer : {
                    component:addComponentReducer,
                    mapData: mapDataReducer,
                    fileStore : fileStoreSlice.reducer,
<<<<<<< HEAD
<<<<<<< HEAD
                    auth : authReducers,
                    editor:editorDataReducer
=======
                    auth : authReducers
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
=======
                    auth : authReducers
>>>>>>> 24a9c0b4df7d7b60d5a33a8c9665bf1d2eea9b68
                  }
                  
   })

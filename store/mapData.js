import { createSlice, current } from '@reduxjs/toolkit'


const initalState = {

   dataContainer: [],
   title: 'Project',
   ids: 'conje',
   idContainer: []
}

const mapData = createSlice({
   name: 'mapData',
   initialState: initalState,
   reducers: {

      idStore(state, action) {

         const data = {
            projectId: action.payload.projectId,
            fileId: action.payload.fileId,
         }

         state.idContainer.push(data)

      }
      ,


      idOFProjectFiles(state, action) {
         state.ids = action.payload.projectFileId
      },

      addData(state, action) {
         const dataList = {
            id: action.payload.id,
            fileName: action.payload.fileName
         }
         state.dataContainer.push(dataList);
      },
      updateData(state, action) {
         const list = action.payload
         state.dataContainer[list.id] = list.title
      },
      deleteData(state, action) {



         state.dataContainer = state.dataContainer.filter(key => key.id !== action.payload.id)

         console.log(state.dataContainer)
         console.log(state.dataContainer.fileId, state.dataContainer.projectId)

      }

      //   console.log('after the condition', current (state.dataContainer))

      //  newContainer = state.dataContainer.splice(idx, 1);

      // state.dataContainer = newContainer;

      // console.log(state.dataContainer)

      ,
      changeTitle(state, action) {
         state.title = action.payload;
         console.log(state.title)
      }

   }

})

// action 

export const mapDataAction = mapData.actions

// reducer

export const mapDataReducer = mapData.reducer


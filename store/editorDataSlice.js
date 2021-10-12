import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  codeString: '',
  allCodes: [],
  codeData: {},

};

const editorDataSlice = createSlice({
  name: 'editorDataComponent',
  initialState: initialState,
  reducers: {


    addCodeString(state, action) {
      const newCode = {
        id: action.payload.id,
        code: action.payload.code,
      }
      let flag = 0;

      state.allCodes.map(val => {
        if (val.id === newCode.id) {
          console.log("already exists")
          val.code = newCode.code
          flag = 1
          //  break;
        }
      })

      if (flag === 0) {
        state.allCodes.push(newCode)
      }

      // state.allCodes.push(action.payload)
      // console.log(action.payload)
      console.log(`redux code box`, current(state))
    },

  },

})
//    export const editorDataActions = editorDataSlice.actions;
// export const editorDataReducer= editorDataSlice.reducer;

const { actions, reducer } = editorDataSlice;
export const { addCodeString } = actions;
export default reducer;
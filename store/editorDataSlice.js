import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  codeString: '',
  allCodes: [],
  codeData: {},
  boxStorge: []

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

        // if it aready exists

        if (val.id === newCode.id) {
          // console.log("already exists")
          val.code = newCode.code
          flag = 1
        }
      })

    //  if not, create a new one

      if (flag === 0) {
        state.allCodes.push(newCode)
      }
      // console.log(`redux code box`, current(state))
    },

    wrapContainer(state, action) {
      state.boxStorge.push({
        boxContainer: action.payload.boxContainer,
        code: action.payload.codeS,
      })
    }

  },

})

const { actions, reducer } = editorDataSlice;
export const { addCodeString, wrapContainer } = actions;
export default reducer;
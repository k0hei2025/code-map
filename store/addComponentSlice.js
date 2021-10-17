import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  components: []
};

const addComponentSlice = createSlice({
  name: 'addComponent',
  initialState: initialState,
  reducers: {

    addComponent(state, action) {
      const newComp = {
        id: action.payload.id,
        sideBarObject: action.payload.sideBarObject,

      }
      state.components.push(newComp);
    },
    removeComponent(state, action) {
      let newComponent = [];
      state.components.filter(val => {
        if (val.id !== action.payload.val.id) {
          newComponent.push(val)
        }
        // console.log(val.id !== action.payload.val.id)
      })
      state.components = newComponent
      // console.log(state.components)
    }

  },

})
export const addComponentActions = addComponentSlice.actions;
export default addComponentSlice.reducer;

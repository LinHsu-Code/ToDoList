import { createSlice } from "@reduxjs/toolkit";
export const listitemsSlice = createSlice({
  name: "listitems",
  initialState: {
    tasklist: [],
    //isallchecked: false,
  },

  reducers: {
    // updateisallchecked: (state) => {
    //   state.isallchecked = state.tasklist.every((task) => task.checked);
    // },
    addtask: (state, action) => {
      state.tasklist.push(action.payload);
      // state.isallchecked = true;
      // this.updateisallchecked();
    },
    deletetask: (state, action) => {
      const index = state.tasklist.findIndex(
        (task) => task.id === action.payload
      );
      state.tasklist.splice(index, 1);
      // this.updateisallchecked();
    },
    checktask: (state, action) => {
      console.log(action.payload);
      const index = state.tasklist.findIndex(
        (task) => task.id === action.payload
      );
      state.tasklist[index].checked = !state.tasklist[index].checked;
      // this.updateisallchecked();
    },
    checkalltask: (state, action) => {
      console.log(action.payload);
      state.tasklist.forEach((task) => (task.checked = action.payload));

      // this.updateisallchecked();
    },
  },
});

export const { addtask, deletetask, checktask, checkalltask } =
  listitemsSlice.actions;
// export const deletetasks = (ids) => (dispatch) => {
//   console.log(ids);
//   ids.forEach((id) => {
//     dispatch(deletetask(id));
//   });
// };

//export const selectTasklist = (state) => state.tasklist;
export default listitemsSlice.reducer;

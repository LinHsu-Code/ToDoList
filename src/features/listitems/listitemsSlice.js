import { createSlice } from "@reduxjs/toolkit";
export const listitemsSlice = createSlice({
  name: "listitems",
  initialState: {
    tasklist: [],
  },
  reducers: {
    addtask: (state, action) => {
      console.log(action.payload);
      state.tasklist.push(action.payload);
    },
    deletetask: (state, action) => {
      const index = state.tasklist.findIndex(
        (task) => task.id === action.payload
      );
      state.tasklist.splice(index, 1);
    },
    deletetasks: (state, action) => {
      state.tasklist.filter((task) => !action.payload.findIndex(task.id));
    },
  },
});

export const { addtask, deletetask, deletetasks } = listitemsSlice.actions;

export default listitemsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
export const listitemsSlice = createSlice({
  name: "listitems",
  initialState: {
    tasklist: [],
  },
  reducers: {
    addtask: (state, action) => {
      state.tasklist.push(action.payload);
    },
    deletetasks: (state, action) => {},
  },
});

export const { addtask, deletetasks } = listitemsSlice.actions;

export default listitemsSlice.reducer;

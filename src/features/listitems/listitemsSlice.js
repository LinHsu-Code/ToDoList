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
      console.log(22222);
      const index = state.tasklist.findIndex(
        (task) => task.id === action.payload
      );
      state.tasklist.splice(index, 1);
    },
    // deletetasks: (state, action) => {
    //   action.payload.forEach((id) => {
    //     console.log(111111);
    //     dispatch(deletetask(id));
    //   });
    //console.log(state.tasklist);
    //console.log(action.payload);
    // const filtertasklist = state.tasklist.filter((task) => {
    //   const result = action.payload.find((id) => {
    //     //console.log(id === task.id);
    //     return id === task.id;
    //   });
    //   console.log(result);
    //   return result;
    // });
    // console.log(filtertasklist, "-------");
    // //console.log(state.tasklist);
    // },
  },
});

//export const { addtask, deletetask, deletetasks } = listitemsSlice.actions;
export const { addtask, deletetask } = listitemsSlice.actions;
export const deletetasks = (ids) => (dispatch) => {
  console.log(ids);
  //dispatch(incrementByAmount(amount));
  ids.forEach((id) => {
    dispatch(deletetask(id));
  });
};

//export const selectTasklist = (state) => state.tasklist;
export default listitemsSlice.reducer;

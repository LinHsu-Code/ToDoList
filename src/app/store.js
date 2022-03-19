import { configureStore } from "@reduxjs/toolkit";
import listitemsReducer from "../features/listitems/listitemsSlice";

export default configureStore({
  reducer: listitemsReducer,
});

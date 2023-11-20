import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/userSlice";

export const ReduxStore = configureStore({
    reducer: {
      user: userSlice.reducer
    }
  });
  
  export default ReduxStore;
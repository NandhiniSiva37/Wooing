import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";

const store = configureStore({
  reducer: {
    // You are free to call the LHS what you like, but it must have a reducer on the RHS.
    counter: counterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
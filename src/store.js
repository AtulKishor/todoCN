import { configureStore } from "@reduxjs/toolkit";

const { todosReducer } = require("./redux/reducers/todoReducer");
export const store = configureStore({
  reducer: { todosReducer }
});

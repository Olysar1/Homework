import { combineReducers } from "@reduxjs/toolkit";
import { toDoReducer } from "./todo/todo.reducer";

export const rootReducer = combineReducers({
  toDo: toDoReducer,
});

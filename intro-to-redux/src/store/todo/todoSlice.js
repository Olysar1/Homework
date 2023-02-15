import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDoList: [],
  toDoListCount: 0,
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState: initialState,
  reducers: {
    addToDo: (state, action) => {
      state.toDoList.push(action.payload);
      state.toDoListCount++;
    },
    incrementCount: (state) => {
      state.toDoListCount++;
    },
    decrementCount: (state) => {
      state.toDoListCount--;
    },
  },
});

export const { addToDo, incrementCount, decrementCount } = toDoSlice.actions;

// export const selectorTodoList = (state) => state.toDo.toDoList;
// export const selectorTodoListCount = (state) => state.toDo.toDoListCount;

export const selectTodo = (state) => state.toDo;
export const selectorTodoList = createSelector(
  selectTodo,
  (toDo) => toDo.toDoList
);
export const selectorTodoListCount = createSelector(
  selectTodo,
  (toDo) => toDo.toDoListCount
);

export default toDoSlice.reducer;

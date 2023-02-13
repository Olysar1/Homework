import { ADD_TODO } from "./todo.types";

const TODO_INITIAL_STATE = {
  toDoList: [],
};

export const toDoReducer = (state = TODO_INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        toDoList: [...state.toDoList, action.payload],
      };

    default:
      return state;
  }
};

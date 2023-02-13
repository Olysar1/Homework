import { ADD_TODO } from "./todo.types";

export const addToDoAction = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

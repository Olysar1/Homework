import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToDo,
  decrementCount,
  incrementCount,
} from "./store/todo/todoSlice";

function ToDoAction() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleOnToDoAdd = () => {
    dispatch(addToDo(value));
    setValue("");
  };

  return (
    <div>
      <h3>TODO ACTION</h3>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleOnToDoAdd}>add to TODO</button>
      <br />
      <button onClick={() => dispatch(incrementCount())}>+</button>
      <button onClick={() => dispatch(decrementCount())}>-</button>
    </div>
  );
}

export default ToDoAction;

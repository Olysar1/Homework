import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDoAction } from "./store/todo/todo.actions";

function ToDoAction() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleOnToDoAdd = () => {
    dispatch(addToDoAction(value));
    setValue("");
  };

  return (
    <div>
      <h3>TODO ACTION</h3>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleOnToDoAdd}>add to TODO</button>
    </div>
  );
}

export default ToDoAction;

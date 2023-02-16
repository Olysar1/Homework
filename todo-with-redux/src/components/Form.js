import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlan } from "../store/todo/planSlice";

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleAddPlan = () => {
    dispatch(addPlan(value));
    setValue("");
  };

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleAddPlan}>Add Plan</button>
    </div>
  );
};

export default Form;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToPlansAction } from "../store/todo/plan.actions";

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleAddPlan = () => {
    dispatch(addToPlansAction(value));
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

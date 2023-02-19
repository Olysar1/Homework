// import { FC } from "react";

import { useState } from "react";
import { useCustomDispatch } from "../store/hooks";
import { addPlan } from "../store/planSlice";

export const Form = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useCustomDispatch();

  const handleAddPlan = (): void => {
    if (inputValue) {
      dispatch(addPlan(inputValue));
      setInputValue("");
    } else alert("please enter a plan");
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={handleAddPlan}>Add Plan</button>
    </div>
  );
};

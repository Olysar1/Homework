import React, { useState } from "react";
import { v4 } from "uuid";

const Form = ({ toDoList, setToDoList }) => {
  const [toDo, setToDo] = useState("");
  //TO CHECK FOR DUPLICATE ITEMS
  //   const itemArr = Array.from(toDoList, (item) => item.task);

  const handleChange = (e) => {
    return setToDo(e.target.value);
  };

  const handleSubmit = () => {
    if (toDo) {
      setToDoList([...toDoList, { task: toDo, completed: false, id: v4() }]);
      setToDo("");
    } else {
      alert("Please enter a task");
    }
  };

  return (
    <>
      <input value={toDo} onChange={handleChange}></input>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Submit
      </button>
      <h1>{toDo}</h1>
    </>
  );
};

export default Form;

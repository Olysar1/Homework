import React, { useState } from "react";
import style from "../styles/Styles.module.css";
import { v4 } from "uuid";

const Form = ({ toDoList, setToDoList }) => {
  const [toDo, setToDo] = useState("");
  //TO CHECK FOR DUPLICATE ITEMS
  //   const itemArr = Array.from(toDoList, (item) => item.task);

  const handleChange = (e) => {
    return setToDo(e.target.value);
  };

  const handleSubmit = () => {
    // console.log(toDo);
    if (toDo) {
      setToDoList([...toDoList, { task: toDo, status: "planned", id: v4() }]);
      setToDo("");
    } else {
      alert("Please enter a task");
    }
  };

  return (
    <div className={style.formContainer}>
      <input
        className={style.inputStyle}
        value={toDo}
        onChange={handleChange}
      ></input>
      <button
        className={style.btnStyle}
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;

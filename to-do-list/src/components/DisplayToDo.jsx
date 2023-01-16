import React from "react";
import ToDo from "./ToDo";

const DisplayToDo = ({ setDone, toDoList, setToDoList }) => {
  return (
    <div className="container">
      <ul>
        {toDoList.map((item, i) => {
          return (
            <ToDo
              setDone={setDone}
              toDoList={toDoList}
              setToDoList={setToDoList}
              item={item}
              index={i}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayToDo;

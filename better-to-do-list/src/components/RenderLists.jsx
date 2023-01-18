import React from "react";
import ToDo from "./ToDo";

const RenderLists = ({ setToDoList, toDoList }) => {
  return (
    <ul>
      {toDoList.map((item) => (
        <ToDo key={item.id} setToDoList={setToDoList} toDoItem={item} />
      ))}
    </ul>
  );
};

export default RenderLists;

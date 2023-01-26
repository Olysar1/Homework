import React from "react";
import RenderItems from "./RenderItems";

const ToDo = ({ setToDoList, toDoItem }) => {
  const handleDelete = () => {
    setToDoList((prev) => prev.filter((item) => item.id !== toDoItem.id));
  };

  const moveItem = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setToDoList((prev) =>
      prev.map((item) => {
        if (item.id === toDoItem.id)
          if (e.target.value === "start") {
            return { task: item.task, status: "inProgress", id: item.id };
          } else if (e.target.value === "finish") {
            return { task: item.task, status: "done", id: item.id };
          } else if (e.target.value === "stop") {
            return { task: item.task, status: "planned", id: item.id };
          } else if (e.target.value === "undo") {
            return { task: item.task, status: "planned", id: item.id };
          }
        return { task: item.task, status: item.status, id: item.id };
      })
    );
  };

  if (toDoItem.status === "planned") {
    return (
      <RenderItems
        toDoItem={toDoItem}
        btn={["Start", "Delete"]}
        moveItem={moveItem}
        handleDelete={handleDelete}
      />
    );
  } else if (toDoItem.status === "inProgress") {
    return (
      <RenderItems
        toDoItem={toDoItem}
        btn={["Stop", "Finish"]}
        moveItem={moveItem}
      />
    );
  } else if (toDoItem.status === "done") {
    return (
      <RenderItems
        toDoItem={toDoItem}
        btn={["Undo", "Delete"]}
        moveItem={moveItem}
        handleDelete={handleDelete}
      />
    );
  }
};

export default ToDo;

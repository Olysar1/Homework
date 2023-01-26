import React from "react";

const ToDo = ({ setToDoList, toDoItem }) => {
  const handleDelete = () => {
    setToDoList((prev) => prev.filter((item) => item.id !== toDoItem.id));
  };

  const moveItem = (e) => {
    e.preventDefault();
    console.log(e.target.value);
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

  //   return (
  //     <>
  //       <li>{toDoItem.task}</li>
  //     </>
  //   );

  if (toDoItem.status === "planned") {
    return (
      <>
        <li>{toDoItem.task}</li>
        <button value="start" onClick={moveItem}>
          Start
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDelete();
          }}
        >
          Delete
        </button>
      </>
    );
  } else if (toDoItem.status === "inProgress") {
    return (
      <>
        <li>{toDoItem.task}</li>
        <button value="stop" onClick={moveItem}>
          stop
        </button>
        <button value="finish" onClick={moveItem}>
          Finish
        </button>
      </>
    );
  } else if (toDoItem.status === "done") {
    return (
      <>
        <li>{toDoItem.task}</li>
        <button value="undo" onClick={moveItem}>
          Undo
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDelete();
          }}
        >
          Delete
        </button>
      </>
    );
  }
};

export default ToDo;

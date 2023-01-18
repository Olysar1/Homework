import React from "react";

const ToDo = ({ setToDoList, toDoItem }) => {
  const handleDelete = () => {
    setToDoList((prev) => prev.filter((item) => item.id !== toDoItem.id));
  };

  const moveItem = () => {
    setToDoList((prev) =>
      prev.map((item) =>
        item.id === toDoItem.id
          ? { task: item.task, completed: !item.completed, id: item.id }
          : { task: item.task, completed: item.completed, id: item.id }
      )
    );
  };

  //   return (
  //     <>
  //       <li>{toDoItem.task}</li>
  //     </>
  //   );

  if (!toDoItem.completed) {
    return (
      <>
        <li>{toDoItem.task}</li>
        <button
          onClick={(e) => {
            e.preventDefault();
            moveItem();
          }}
        >
          Done
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
  } else {
    return (
      <>
        <li>{toDoItem.task}</li>
        <button
          onClick={(e) => {
            e.preventDefault();
            moveItem();
          }}
        >
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

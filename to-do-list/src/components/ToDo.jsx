import React from "react";

const ToDo = ({ setDone, toDoList, setToDoList, item, index }) => {
  const handleDone = (e) => {
    e.preventDefault();
    setDone((prev) => [...prev, item]);
    setToDoList(toDoList.filter((el) => el !== item));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setToDoList(toDoList.filter((el) => el !== item));
  };

  return (
    <li className="within-containers" key={index}>
      {item}
      <div>
        <button onClick={handleDone}>Done</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default ToDo;

import React from "react";

const Done = ({ doneList, setDone, setToDoList, item, index }) => {
  const handleUndo = (e) => {
    e.preventDefault();
    setToDoList((prev) => [...prev, item]);
    setDone(doneList.filter((el) => el !== item));
  };

  const handleDeleteDone = (e) => {
    e.preventDefault();
    setDone(doneList.filter((el) => el !== item));
  };

  return (
    <li className="within-containers" key={index}>
      {item}
      <div>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleDeleteDone}>Delete</button>
      </div>
    </li>
  );
};
export default Done;

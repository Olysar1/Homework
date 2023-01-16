import React from "react";
import Done from "./Done";

const DisplayDone = ({ doneList, setDone, setToDoList }) => {
  return (
    <div className="container">
      <ul>
        {doneList.map((item, i) => {
          return (
            <Done
              doneList={doneList}
              setDone={setDone}
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

export default DisplayDone;

import React from "react";
import ToDo from "./ToDo";
import style from "../styles/Styles.module.css";

const RenderLists = ({ colName, setToDoList, toDoList }) => {
  const chooseBorderColor = () => {
    if (colName === "Plans") {
      return "#b48074";
    } else if (colName === "In Progress") {
      return "#ddd382";
    } else return "#b7cc9e";
  };

  return (
    <div className={style.listsContainer}>
      <h3
        className={style.listHeader}
        style={{ borderColor: chooseBorderColor() }}
      >{`${colName} | ${toDoList.length}`}</h3>
      <ul className={style.ulStyle}>
        {toDoList.map((item) => (
          <ToDo key={item.id} setToDoList={setToDoList} toDoItem={item} />
        ))}
      </ul>
    </div>
  );
};

export default RenderLists;

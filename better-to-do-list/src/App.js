// import style from "./styles/Styles.module.css";
import "./App.css";
import style from "./styles/Styles.module.css";
import React from "react";
import { useState } from "react";
//components
import Form from "./components/Form";
import RenderLists from "./components/RenderLists";

function App() {
  const [toDoList, setToDoList] = useState([]);

  return (
    <div className="App">
      <h2>Olysar's To Do App</h2>
      <Form setToDoList={setToDoList} toDoList={toDoList} />
      <div className={style.listsContainerWrapper}>
        <RenderLists
          colName={"Plans"}
          setToDoList={setToDoList}
          toDoList={toDoList.filter((item) => item.status === "planned")}
        />
        <RenderLists
          colName={"In Progress"}
          setToDoList={setToDoList}
          toDoList={toDoList.filter((item) => item.status === "inProgress")}
        />
        <RenderLists
          colName={"Done"}
          setToDoList={setToDoList}
          toDoList={toDoList.filter((item) => item.status === "done")}
        />
      </div>
    </div>
  );
}

export default App;

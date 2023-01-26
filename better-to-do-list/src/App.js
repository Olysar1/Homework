import "./App.css";
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
      <div className="lists-container">
        {console.log(toDoList)}
        <RenderLists
          setToDoList={setToDoList}
          toDoList={toDoList.filter((item) => item.status === "planned")}
        />
        <RenderLists
          setToDoList={setToDoList}
          toDoList={toDoList.filter((item) => item.status === "inProgress")}
        />
        <RenderLists
          setToDoList={setToDoList}
          toDoList={toDoList.filter((item) => item.status === "done")}
        />
      </div>
    </div>
  );
}

export default App;

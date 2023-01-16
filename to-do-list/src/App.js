import "./App.css";
import { useState } from "react";
//components
import DisplayToDo from "./components/DisplayToDo";
import DisplayDone from "./components/DisplayDone";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [doneList, setDone] = useState([]);

  const handleChange = (event) => {
    return setToDo(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toDo
      ? setToDoList((prev) => [...prev, toDo])
      : alert("Please Enter a Task");
  };

  return (
    <form>
      <h2>To Do App</h2>
      <input type="text" name="toDo" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <div className="big-container">
        {/* <div className="container to-do"></div> */}
        <DisplayToDo
          doneList={doneList}
          setDone={setDone}
          toDoList={toDoList}
          setToDoList={setToDoList}
        />
        {/* <div className="container done"></div> */}
        <DisplayDone
          doneList={doneList}
          setDone={setDone}
          toDoList={toDoList}
          setToDoList={setToDoList}
        />
      </div>
    </form>
  );
}

export default App;

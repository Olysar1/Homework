import { useSelector } from "react-redux";
import {
  selectorTodoList,
  selectorTodoListCount,
} from "./store/todo/todoSlice";

function ToDoList() {
  const toDoList = useSelector(selectorTodoList);
  const toDoListCount = useSelector(selectorTodoListCount);

  return (
    <div>
      <h2>TODO count</h2>
      {toDoListCount}
      <h3>TODO LIST</h3>
      {toDoList.map((item, index) => {
        return (
          <div key={index}>
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ToDoList;

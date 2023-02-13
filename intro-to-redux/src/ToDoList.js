import { useSelector } from "react-redux";
import { selectorTodoList } from "./store/todo/todo.selectors";

function ToDoList() {
  const toDoList = useSelector(selectorTodoList);

  return (
    <div>
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

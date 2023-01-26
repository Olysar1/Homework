import BtnGroup from "./BtnGroup";
import style from "../styles/Styles.module.css";

const RenderItems = ({ toDoItem, btn, moveItem, handleDelete }) => {
  const randomColor = () => {
    const colors = ["#3398ef", "#e64e33", "#f0cc16", "#95ce58"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const color = randomColor();

  return (
    // <StyledToDoLi style={`background-color: ${randomColor()}`}>
    //   <span>{toDoItem.task}</span>
    //   <BtnGroup btn={btn} moveItem={moveItem} handleDelete={handleDelete} />
    // </StyledToDoLi>
    <li className={style.toDoItemStyle} style={{ borderColor: color }}>
      <span className={style.spanStyle}>{toDoItem.task}</span>
      <BtnGroup
        btn={btn}
        moveItem={moveItem}
        handleDelete={handleDelete}
        color={color}
      />
    </li>
  );
};

export default RenderItems;

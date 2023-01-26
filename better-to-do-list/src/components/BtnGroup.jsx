import style from "../styles/Styles.module.css";

const BtnGroup = ({ btn, moveItem, handleDelete, color }) => {
  const chooseValue = (btnName) => {
    if (btnName === "Start") {
      return "start";
    } else if (btnName === "Stop") {
      return "stop";
    } else if (btnName === "Finish") {
      return "finish";
    } else if (btnName === "Undo") {
      return "undo";
    }
  };

  return (
    <div className={style.btnGroupStyle}>
      {btn.map((name, i) =>
        name !== "Delete" ? (
          <button
            className={style.btnStyle}
            style={{ borderColor: color }}
            key={i}
            value={chooseValue(name)}
            onClick={moveItem}
          >
            {name}
          </button>
        ) : (
          <button
            className={style.btnStyle}
            style={{ borderColor: color }}
            key={i}
            onClick={(e) => {
              e.preventDefault();
              handleDelete();
            }}
          >
            {name}
          </button>
        )
      )}
    </div>
  );
};

export default BtnGroup;

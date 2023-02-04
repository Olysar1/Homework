const BtnBroup = ({ itemStatus }) => {
  if (itemStatus === "planned") {
    return (
      <div>
        <button>Start</button>
        <button>Delete</button>
      </div>
    );
  } else if (itemStatus === "inProgress") {
    return (
      <div>
        <button>Stop</button>
        <button>Finish</button>
      </div>
    );
  } else if (itemStatus === "done") {
    return (
      <div>
        <button>Undo</button>
        <button>Delete</button>
      </div>
    );
  }
};

export default BtnBroup;

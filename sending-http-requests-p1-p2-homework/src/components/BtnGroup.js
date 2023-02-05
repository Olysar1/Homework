import useRequest from "../hooks/useRequest";
import { API_KEY } from "../config";

const BtnBroup = ({ item }) => {
  const { request } = useRequest({
    requestUrl: `/api/v1/task/${item.id}`,
    method: "PUT",
  });
  console.log(item.id);

  const defineStatus = (btnClicked) => {
    if (btnClicked === "start") {
      return "inProgress";
    } else if (btnClicked === "stop") {
      return "planned";
    } else if (btnClicked === "finish") {
      return "done";
    } else if (btnClicked === "undo") {
      return "planned";
    }
  };

  const moveItems = (e) => {
    // e.preventDefault();

    if (e.target.value !== "delete") {
      request({ status: defineStatus(e.target.value) })
        .then((data) => console.log(data))
        .catch((error) => {
          console.error(error);
        });
    } else {
      fetch(`/api/v1/task/${item.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      })
        .then((response) => {
          if (!response.ok) throw new Error("Something went wrong");
          return response.json();
        })
        .catch((error) => console.error(error));
    }
  };

  if (item.status === "planned") {
    return (
      <div>
        <button value={"start"} onClick={moveItems}>
          Start
        </button>
        <button value={"delete"} onClick={moveItems}>
          Delete
        </button>
      </div>
    );
  } else if (item.status === "inProgress") {
    return (
      <div>
        <button value={"stop"} onClick={moveItems}>
          Stop
        </button>
        <button value={"finish"} onClick={moveItems}>
          Finish
        </button>
      </div>
    );
  } else if (item.status === "done") {
    return (
      <div>
        <button value={"undo"} onClick={moveItems}>
          Undo
        </button>
        <button value={"delete"} onClick={moveItems}>
          Delete
        </button>
      </div>
    );
  }
};

export default BtnBroup;

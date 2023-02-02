import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import RenderLists from "./components/RenderLists";

function App() {
  const API_KEY = "DiLTcLAZhNeQOzQRQZ-Osk1jfA5xlF2wWdVfPbJ5ewhi0yiM4g";
  const [planList, setPlanList] = useState([]);

  useEffect(() => {
    fetch("/api/v1/task", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((response) => {
        if (!response.ok)
          throw new Error("Something went wrong while getting 'planList'");
        return response.json();
      })
      .then((data) => {
        setPlanList(
          data.items.map((item) => ({
            task: item.task,
            status: item.status,
            id: item.id,
          }))
        );
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>Plan Your Plans</h1>
      <Form API_KEY={API_KEY} setPlanList={setPlanList} />
      <div className="list-wrapper">
        <RenderLists
          colName={"Planned"}
          planList={planList.filter((item) => item.status === "planned")}
        />
        <RenderLists
          colName={"In Progress"}
          planList={planList.filter((item) => item.status === "inProgress")}
        />
        <RenderLists
          colName={"Done"}
          planList={planList.filter((item) => item.status === "done")}
        />
      </div>
    </div>
  );
}

export default App;

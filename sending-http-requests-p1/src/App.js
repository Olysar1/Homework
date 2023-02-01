import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";

const API_KEY = "2UNAmXyM2aRPi1Enia3W6hXMCBMgaBP47TZ2T-chzokG7SEEfQ";

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("/api/v1/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("GET: Something went wrong");
        return response.json();
      })
      .then((data) => {
        setUserList(
          data.items.map((item) => ({
            firstName: item.firstName,
            lastName: item.lastName,
            id: item._uuid,
          }))
        );
      })
      .catch((error) => console.error(error));
  }, []);

  const onFormSubmit = (firstName, lastName) => {
    fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify([{ firstName, lastName }]),
    })
      .then((response) => {
        if (!response.ok) throw new Error("POST: Something went wrong");
        return response.json();
      })
      .then((data) => {
        setUserList((prevList) => [
          ...prevList,
          {
            firstName: data.items[0].firstName,
            lastName: data.items[0].lastName,
            id: data.items[0]._uuid,
          },
        ]);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Form onFormSubmit={onFormSubmit} />
      {userList.map((user) => (
        <p key={user.id}>
          {user.firstName}, {user.lastName}
        </p>
      ))}
    </div>
  );
}

export default App;

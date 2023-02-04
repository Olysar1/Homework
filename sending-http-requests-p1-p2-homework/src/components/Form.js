import { useState } from "react";
import { v4 } from "uuid";

const Form = ({ API_KEY, setPlanList }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //LOCAL SCALE
    // setPlanList((prevList) => [
    //   ...prevList,
    //   { task: item, status: "done", id: v4() },
    // ]);

    //CRUDAPI
    if (item) {
      fetch("/api/v1/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify([{ task: item, status: "planned", id: v4() }]),
      })
        .then((response) => {
          setItem("");
          if (!response.ok)
            throw new Error("Something went wrong while posting");
          return response.json();
        })
        .then((data) => {
          const plan = data.items[0];
          // console.log(plan);
          setPlanList((prev) => [
            ...prev,
            { task: plan.task, status: plan.status, id: plan.id },
          ]);
        })
        .catch((error) => console.error(error));
    } else alert("Please enter a task before submitting");
  };

  const onChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div>
      <input value={item} onChange={onChange} />
      <button onClick={handleSubmit}>Submit Task</button>
    </div>
  );
};

export default Form;

import { useRef } from "react";

const Form = ({ taskSubmit, taskItem }) => {
  const itemRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemRef.current) {
      taskSubmit(itemRef.current.value);
    } else {
      alert("Please enter a task before submitting");
    }
  };

  return (
    <div>
      <input
        ref={itemRef}
        defaultValue={taskItem}
        placeholder="Enter Plan Here"
      />
      <button onClick={handleSubmit}>Submit Task</button>
    </div>
  );
};

export default Form;

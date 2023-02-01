import { useState } from "react";

const Form = ({ onFormSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(firstName, lastName);
  };

  return (
    <form>
      <input
        name="firstName"
        onChange={(e) => setFirstName(e.target.value || "")}
        placeholder="First name"
      />
      <input
        name="lastName"
        onChange={(e) => setLastName(e.target.value || "")}
        placeholder="Last name"
      />
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
};

export default Form;

import { useRef } from "react";

const Form = ({ onFormSubmit, firstName, lastName }) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    if (firstNameRef.current && lastNameRef.current) {
      onFormSubmit(firstNameRef.current.value, lastNameRef.current.value);
    } else {
      console.error("Some 'ref' was not defined");
    }
  };

  return (
    <form>
      <input
        name="firstName"
        ref={firstNameRef}
        defaultValue={firstName}
        placeholder="First name"
      />
      <input
        name="lastName"
        ref={lastNameRef}
        defaultValue={lastName}
        placeholder="Last name"
      />
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
};

export default Form;

import { useRef } from "react";
import { languages, useLanguageContext } from "../contexts/LanguageContext";

const Form = ({ taskSubmit, taskItem }) => {
  const itemRef = useRef();

  const { language } = useLanguageContext();

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
        placeholder={languages[language].placeholder}
      />
      <button onClick={handleSubmit}>{languages[language].submit}</button>
    </div>
  );
};

export default Form;

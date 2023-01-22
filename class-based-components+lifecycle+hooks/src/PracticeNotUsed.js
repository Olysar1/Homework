import { useEffect, useRef, useState } from "react";

const App = () => {
  const [name, setName] = useState("Gela");
  const [age, setAge] = useState(1);
  const inputRef = useRef(null);

  //same as componentDidUpdate:
  useEffect(() => {
    console.log(`from useEffect->new name is: ${name}`);
    //if we want to clean up previous value:
    return () => {
      console.log(`cleaning ${name}`);
    };
    //this method runs only if "name" changes
  }, [name]);

  useEffect(() => {
    console.log(`from useEffect->new name is: ${name}`);
  });

  //same as componentDidMount:
  useEffect(() => {
    console.log(`from useEffect->new name is: ${name}`);
  }, []);

  ////////////////////////////////
  const changeNameAndAge = () => {
    setName("Gurami");
    setAge(10);
  };

  //useRef:
  const focusInput = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  console.log(`${name} is ${age} years old`);

  return (
    <div>
      <button onClick={() => setName("Vano")}>Update Name</button>
      <button onClick={() => setAge(5)}>Update Age</button>
      <button onClick={changeNameAndAge}>Update Name And Age</button>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default App;

import { useState, useCallback } from "react";
import "./App.css";
import { DisplayText } from "./DisplayText";

const App = () => {
  const [age, setAge] = useState<number | null>(null);
  console.log(age);

  const addNumsWithUseEffect = useCallback((param1: number, param2: number) => {
    return param1 + param2;
  }, []);

  const onDisplayClickMe = (age: number) => {
    console.log(age);
    setAge(age);
  };

  return (
    <div className="App">
      <DisplayText age={22} text={"trakis gari"} logAge={onDisplayClickMe} />
      <DisplayText age={2} logAge={onDisplayClickMe} />
    </div>
  );
};

export default App;

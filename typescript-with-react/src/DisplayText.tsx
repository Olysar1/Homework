import { FC } from "react";

type Props = {
  text?: string;
  age: number;
  logAge: (age: number) => void;
};

// interface Props {
//   text?: string;
//   age: number;
//   logAge: (age: number) => void;
// }

export const DisplayText: FC<Props> = ({
  text = "Default Value",
  age,
  logAge,
}) => {
  const handleClick = () => {
    logAge(age);
  };
  return (
    <div>
      <h1>{text}</h1>
      <h1>{age}</h1>
      <button onClick={handleClick}>damachire</button>
    </div>
  );
};

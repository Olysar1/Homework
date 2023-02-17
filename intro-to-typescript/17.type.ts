// ! Type
//simple types
type JustNumber = number;

let someNumberConst: JustNumber = 98798;
someNumberConst = 3498;
//invalid
someNumberConst = "Invalid, string cannot be assigned to type of JustNumber";

// "?" in sayHi?: makes sayHi an optional property
type SomePerson = {
  name: string;
  age: number;
  favColors: string[];
  sayHi?: () => void;
};

const person1: SomePerson = {
  name: "Person 1",
  age: 45,
  favColors: ["blue", "pink", "purple", "red", "black", "white"],
};
const person2: SomePerson = {
  name: "Person 2",
  age: 78,
  favColors: ["blue", "pink", "purple", "red", "black", "white"],
  sayHi: () => console.log("hi"),
};

type BinaryOperatorOnNumber = (a: number, b: number) => number;

const add: BinaryOperatorOnNumber = (a, b) => a + b;
const multiply: BinaryOperatorOnNumber = (a, b) => a * b;

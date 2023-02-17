// ! Object
//1. object type (not recommentded)
let someObj: object;
someObj = {
  someNo: 123,
  someString: "hi there!",
  sayHi: () => {
    console.log("Hi");
  },
};
//valid
someObj = [];
someObj = () => {
  console.log("another function");
};
//invalid
someObj = 2354;

//2. Adhoc object declaration
let anotherObject: { someNo: number; someString: string; sayHi: () => void } = {
  someNo: 345,
  someString: "hi",
  sayHi: () => {
    console.log("hi");
  },
};
//invalid
anotherObject = [];
anotherObject = () => {
  console.log("this is also invalid");
};
anotherObject.somethingNotInType =
  "Invalid, becaus the property os mpt om type";

anotherObject.someNo = "Invalid, someNo is of type number";

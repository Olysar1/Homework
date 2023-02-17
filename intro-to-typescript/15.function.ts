// ! Function
//1. Function type (doesn't care about args and return types)
let someTypedFunction: Function = () => {
  console.log("Any function could have been assigned to this variable");
};
someTypedFunction = (a: number, b: number) => {
  const sum: number = a + b;
  return sum;
};
//valid, because the type doesn't care about the args and return types.
someTypedFunction();
//invalid
someTypedFunction = 3545;

//2. Explicit (Adhoc) function type declaration
let someAnotherTypedFunction: (arg1: number, arg2: number) => number = (
  a,
  b
) => {
  return a + b;
};
//valid
someAnotherTypedFunction(44, 22);
//invalid
someAnotherTypedFunction(34, "345");
const returnedValue: string = someAnotherTypedFunction(345, 346);
someAnotherTypedFunction = () => {
  console.log("Invalid, this does not match the type declaration");
};
//valid
//You can always use less parameters than declared
someAnotherTypedFunction = () => {
  return 3545;
};
//invalid
//You cannot use more parameters than declared in the type
someAnotherTypedFunction = (a, b, c) => {
  return a + b + c;
};
//valid
someAnotherTypedFunction = (nameDoesNotMatter1, nameDoesNotMatter2) => {
  return nameDoesNotMatter1 + nameDoesNotMatter2;
};

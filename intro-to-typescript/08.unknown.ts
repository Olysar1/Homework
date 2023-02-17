// ! Unknown
let unknownVariable: unknown = 44;
assignAnything = "Assign string";
assignAnything = true;
assignAnything = false;
assignAnything = [35, 45, 44];
let unknownArray: unknown[] = [454, 435, "string also", false];
//You cannot access properties on an unknown type of value
//invalid
unknownVariable.sayHello();
//Cannot assign to other types
let someStrictNumber: number = 66;
const unknownValueAgain: unknown =
  "Not a number, but can be assigned to number";
//invalid
someStrictNumber = unknownValueAgain;
//but canassign to any type
let someAnyTypeVariable: any = [34, 5];
let someUnknownVariable: unknown = "unknown value";
//valid
someAnyTypeVariable = someUnknownVariable;

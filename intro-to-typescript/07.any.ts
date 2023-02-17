// ! Any
let assignAnything: any = 44;
assignAnything = "Assign string";
assignAnything = true;
assignAnything = false;
assignAnything = [35, 45, 44];

let arrayOfAnyType: any[] = [454, 435, "string also", false];

assignAnything.sayHello();

let strictlyNumber: number = 66;
const anAnyTypeOfVariable: any = "Not a number, but can be assigned to number";
//valid
strictlyNumber = anAnyTypeOfVariable;

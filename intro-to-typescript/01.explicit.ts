// ! Explicit

const someConst: string = "some const";
let someNumber: number = 44;

let num: number = 44;
//valid
num = 8595;
num = 3445.88;
//invalid
num = "333";

let str: string = "hello, I can only be a string";
//valid
str = "Just another string";
//invalid
str = 22;

let someNumber: number;
//valid
someNumber = 55;
//invalid
someNumber = "Iam not a number";
//invalid
someNumber = "333";
//valid
someNumber = Infinity;

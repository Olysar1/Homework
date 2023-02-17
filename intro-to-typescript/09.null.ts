// ! Null
let nullValue: null = null;
//invalid
nullValue = 33;
let someNumber: number = 333;
someNumber = nullValue;
//valid
let anyValue: any = 354;
anyValue = nullValue;
let unknownValue: unknown = 3543;
unknownValue = nullValue;

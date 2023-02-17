// ! Undefined
let undefinedValueA: undefined = undefined;

//invalid
undefinedValueA = 33;
let someNumberB: number = 333;
someNumberB = undefinedValue;

//valid
let anyValueB: any = 354;
anyValueB = undefinedValueA;
let unknownValueB: unknown = 3543;
unknownValueB = undefinedValueA;

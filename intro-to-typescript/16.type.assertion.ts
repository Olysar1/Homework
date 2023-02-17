const someUnknownType: unknown = "I am of type unknown";

someUnknownType.toLowerCase();

(someUnknownType as string).toLowerCase();

//example
const unknownTypeA: unknown = 354;
const someNumberC: number = unknownTypeA as number;

//angular brackets --> <someTypeB>SomeTypeA
const unknownTypeB: unknown = [35, 345];
const someArrayType: number[] = <number[]>unknownTypeB;

let someNumberType: number = 34546;
const someUnknownValue: unknown = "This is unknown";

someNumberType = someUnknownValue as number;
console.log("typeof still returns string -", typeof someNumberType);

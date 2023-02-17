// ! Interface
//basic syntax
// interface interfaceName {
// ...properties
// }

interface DifferentPerson {
  name: string;
  age: number;
}
const p3: DifferentPerson = {
  name: "p3",
  age: 23,
};
//interfaces can be extended
//the new interface will have new properties defined as well as
//properties from the old declarations
interface Teacher extends DifferentPerson {
  teaches: string;
}
//now teacher has all of the "DifferentPerson's" fields as well as new fields defined
const t1: Teacher = {
  name: "some teacher",
  age: 325,
  teaches: "TS",
};
//interface can also be used too define function types
//the earlier sum function declaration can be done with interfaces
interface Sum {
  (a: number, b: number): number;
}
const addNumbers: Sum = (a, b) => a + b;

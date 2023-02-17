// ! Union
//syntax --
//typeA | typeB | typeC
let input: string | number = 44;
input = 55;
input = "this is valid also";
//invalid
input = true;
//the types don't need to be so simple
type A = {
  a: string;
  b: string;
};
type B = {
  c: string;
  d: string;
};
//either a value of type A or B can be assigned to the below declaration
type AOrB = A | B;
const onlyA: A = {
  a: "a",
  b: "b",
};
const onlyB: B = {
  c: "c",
  d: "d",
};
let aOrB: AOrB = onlyB;
aOrB = onlyA;
//not valid
aOrB = {
  notValid: "Yes this is not valid",
};

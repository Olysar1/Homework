// ! Intersection
//syntax
//typeA & typeB & typeC
type SomeA = {
  a: string;
};
type SomeB = {
  b: string;
};

type SomeTypeAAndB = SomeA & SomeB;
const SomeAAndBValue: SomeTypeAAndB = {
  a: "this comes from the first declaration",
  b: "this comes from the second declaration",
};
//invalid
const oneMore: SomeTypeAAndB = {
  //invalid
  d: "d is not defined in any of two types combined",
};

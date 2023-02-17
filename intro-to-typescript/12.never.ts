// ! Never
//never keyword indicates that the function will never return anything
function throwSomeError(): never {
  throw new Error("I am only throwing error");
}
function neverReturn(): never {
  while (true) {}
}

//HOMEWORK

//task1:
const changeSymbol = (str, toChange, toChangeWith) => {
  if (str.includes(toChange)) {
    const temp = str.split(toChange);
    temp[2] = temp[1];
    temp[1] = toChangeWith;
    return temp.join("");
  } else {
    return "string does not contain selected value";
  }
};

console.log(changeSymbol("function", "nct", "NCT"));

//task2:
const bigString = (str) => {
  return str.toUpperCase();
};

console.log(bigString("golden slumbers fill your eyes"));

//task3:
const people = [
  { name: "George", age: 20 },
  { name: "Martin", age: 18 },
  { name: "Kiera", age: 35 },
  { name: "Rumpelshtielschen", age: 24 },
];

const sortPeople = (arr) => {
  return arr.sort((a, b) => a.age - b.age);
};

console.log(sortPeople(people));

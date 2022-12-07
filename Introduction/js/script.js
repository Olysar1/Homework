// console.log("Hello Again!");

// let company = "SkillWill";
// company = "Sweeft";

// console.log(company, typeof company);
// const myAge = 30;
// console.log(myAge, typeof myAge);
// console.log(false, typeof true);
// console.log(null, typeof null); //object
// console.log(undefined, typeof undefined);

// const ageNumber = 30;
// const ageString = "30";

// console.log(ageNumber == ageString);
// console.log(ageNumber === ageString);

// console.log(calculateSum1(4, 5));

// function calculateSum1(a, b) {
//   return a + b;
// }

// const calculateSum2 = function (a, b) {
//   return a + b;
// };

// let company = "SkillWill";

// function changeCompany(company) {
//   company = "Sweeft";
// }

// changeCompany(company);
// console.log(company);

//HOMEWORK:

//TASK 1:
const compareTwoNums = function (a, b) {
  if (a == b) {
    console.log("equal");
    return "The two numbers are equal";
  } else {
    console.log("not equal");
    return "The two numbers are not equal";
  }
};

compareTwoNums(5, 1);

//TASK 2:
const toCelsius = function (fahrenheit) {
  if (typeof fahrenheit == "number") {
    const celsius = (5 / 9) * (fahrenheit - 32);
    console.log(celsius);
    return celsius;
  } else {
    return false;
  }
};

toCelsius(98.6);

//TASK 3:
const operations = ["+", "-", "*", "/"];
const calculate = function (a, b, operation) {
  if (
    (typeof a != "number" && typeof b != "number") ||
    !operations.includes(operation)
  ) {
    return false;
  } else {
    switch (operation) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
    }
  }
};

console.log(calculate(5, 3, "*"));

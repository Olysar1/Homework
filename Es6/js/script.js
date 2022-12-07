// HOMEWORK

//task1:
const taskOne = (...x) => {
  if (x.length <= 2) {
    console.log("need more then two numbers");
    return "need more then two numbers";
  }

  let arr = [];
  let result = 1;

  x.slice(2).forEach((num) => (result *= num));

  arr.push(x[0] + x[1]);
  arr.push(result);

  return arr;
};

console.log(taskOne(1, 2, 3, 4, 5, 6, 7));

//task2:
const user = {
  banks: [
    {},
    {},
    {
      address: {
        city: "Tbilisi",
      },
    },
  ],
};

const taskTwo = (user = { banks: [, , { address: ({ city } = {}) }] }) => {
  console.log(user.banks[2].address.city);
};

taskTwo(); //undefuned

//task3:
const customer = {
  name: "Giorgi",
  address: {
    country: "Georgia",
    city: "Rustavi",
  },
  skills: ["skill1", "skill2", "skill3"],
  employed: false,
};

// const deepCopySpread = (object) => {
//   let result = {};
//   for (let entity in object) {
//     if (typeof object[entity] === "object") {
//       if (Array.isArray(object[entity])) {
//         //array
//         result[entity] = [...object[entity]];
//       } else {
//         //object
//       }
//     } else {
//       result[entity] = object[entity];
//     }
//     return result;
//   }
// };

// const customerClone = deepCopySpread(customer);

// console.log(customer);
// console.log(customerClone);

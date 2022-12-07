"use strict";
//HOMEWORK

//task 1:
const user = [
  { name: "Temo", age: 25, address: { country: "Georgia", city: "Tbilisi" } },
  { name: "Lasha", age: 21, address: { country: "Georgia", city: "Kutaisi" } },
  { name: "Ana", age: 28, address: { country: "Georgia", city: "Batumi" } },
];

const findTheYoungest = function (user) {
  let youngestAge = 1000;
  let youngestName = "";
  user.forEach((element) => {
    if (youngestAge > element.age) {
      youngestAge = element.age;
      youngestName = element.name;
    }
  });
  console.log(youngestName);
  return youngestName;
};

findTheYoungest(user);

//task 2:

//deep copy
const makeDeepClone = function (userArr) {
  if (typeof userArr !== "object") {
    return userArr;
  }
  let userDeepClone = Array.isArray(userArr) ? [] : {};
  for (let key in userArr) {
    const val = userArr[key];
    userDeepClone[key] = makeDeepClone(val);
  }

  return userDeepClone;
};

const clone = makeDeepClone(user);

user[0].address.country = "Armenia";
console.log(user);
console.log(clone);

//task 3:

const diceGame = function () {
  let playAgain = true;

  while (playAgain) {
    let playerOneRolls = Math.floor(Math.random() * 6) + 1;
    let playerTwoRolls = Math.floor(Math.random() * 6) + 1;
    if (playerOneRolls === 3) {
      playAgain = false;
      console.log("player 1 wins!");
      return "player 1 wins!";
    } else if (playerTwoRolls === 3) {
      playAgain = false;
      console.log("player 2 wins!");
      return "player 2 wins!";
    } else if (playerOneRolls === playerTwoRolls) {
      playAgain = false;
      console.log("draw!");
      return "draw!";
    }
  }

  return 0;
};

diceGame();

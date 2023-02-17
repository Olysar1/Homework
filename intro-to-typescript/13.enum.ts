// ! Enum
enum Fruit {
  Apple,
  Orange,
  Melon,
}

let f: Fruit = Fruit.Apple;
console.log(f === 0); //true
console.log(f === Fruit.Apple); //true
console.log(f === Fruit.Orange); //false

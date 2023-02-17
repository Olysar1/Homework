function greet(name: string): void {
  console.log(`hello ${name}`);
}

function discardTheReturnValue(name: string): void {
  console.log(`hello ${name}`);
  return 333;
}

const greetVersionTwo = (name: string): void => {
  console.log(`hello ${name}`);
};

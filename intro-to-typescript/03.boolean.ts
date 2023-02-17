// ! Boolean
const alwaysTrue: boolean = true;
let onlyBool: boolean = true;
//valid
onlyBool = false;
//invalid
onlyBool = "true";
//invalid
const addition = alwaysTrue + onlyBool;

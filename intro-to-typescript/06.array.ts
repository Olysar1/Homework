// ! Array
//Normal Array
const someArray: number[] = [1, 2, 3, 4, 5];
//valid
someArray.push(3456);
//invalid
someArray.push("ok");
someArray.push(true);

//Generic array
const oneMoreArray: Array<number> = [34, 35, 23, 21];
//valid
oneMoreArray.push(3453);
oneMoreArray.push(34.234);
//invalid
oneMoreArray.push("not valid!");

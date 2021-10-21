var input = require("fs").readFileSync("stdin", "utf-8");

var [A, B, C] = input.split(" ").map(item => parseInt (item));

maiorAB = (A + B + Math.abs (A-B))/2;
maiorABC = (maiorAB + C + Math.abs (maiorAB - C))/2

console.log(`${maiorABC} eh o maior`)
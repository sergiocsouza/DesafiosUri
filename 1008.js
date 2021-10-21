var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n");

var numberOfFunc = parseInt(valores.shift());
var number1 = parseInt(valores.shift());
var number2 = parseFloat(valores.shift());
var salary = number1 * number2;

console.log(`NUMBER = ${numberOfFunc}\nSALARY = U$ ${salary.toFixed(2)}`);
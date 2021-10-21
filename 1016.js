var input = require("fs").readFileSync("stdin", "utf-8");

var valor = input.split("\n");

var x = parseInt(valor.shift(input));

var result = (60 * x) / 30;

console.log (`${result} minutos`)
var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n");


var A =  parseInt(valores.shift());
var B =  parseInt(valores.shift());
var C =  parseInt(valores.shift());
var D =  parseInt(valores.shift());

diferenca = (A * B - C * D);

console.log("DIFERENCA = " + diferenca);

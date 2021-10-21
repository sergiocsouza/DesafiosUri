var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n");

var name = valores.shift();
var salaryf = parseFloat(valores.shift());
var salaryB = parseFloat(valores.shift());
var porce = (15/100);

var total = salaryB * porce + (salaryf);

console.log('TOTAL = R$ ' + total.toFixed(2));
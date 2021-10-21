var input = require("fs").readFileSync("stdin", "utf-8");

var linhas = input.split("\n");

codItem1 = linhas.shift().split (" ");
codItem2 = linhas.shift().split (" ");


var idItem1 = codItem1.shift();
var qtdItem1 = codItem1.shift();
var valorUniItem1 = codItem1.shift();
var total1 = qtdItem1 * valorUniItem1;

var idItem2 = codItem2.shift();
var qtdItem2 = codItem2.shift();
var valorUniItem2 = codItem2.shift();
var total2 = qtdItem2 * valorUniItem2;

var resumo = total1 + total2

console.log(`VALOR A PAGAR: R$ ${resumo.toFixed(2)}`);
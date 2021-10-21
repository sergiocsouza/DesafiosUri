var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n");

var kml = 12;
var tempoGasto = parseInt(valores.shift(input));
var litrosNecessario = parseInt(valores.shift(input));

var result = (tempoGasto * litrosNecessario ) / kml;

console.log(result.toFixed(3))

var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n");

var km = parseInt(valores.shift(input));
var combustivelGasto = parseFloat(valores.shift(input));

var total = km / combustivelGasto

console.log(`${total.toFixed(3)} km/l`)
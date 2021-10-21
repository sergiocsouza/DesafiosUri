var input = require("fs").readFileSync("stdin", "utf-8");

var [A, B, C] = input.split(" ").map(item => parseFloat (item))
var PI =  3.14159;

var areaTriangulo =  (A * C) / 2.0;
var areaCirculo = PI * Math.pow(C, 2)
var trapezio = ((A + B) * C) / 2.0
var areaQuadrado = B*B
var areaRetangulo = B * A



console.log("TRIANGULO: " + areaTriangulo.toFixed(3))
console.log("CIRCULO: " + areaCirculo.toFixed(3))
console.log("TRAPEZIO: " + trapezio.toFixed(3))
console.log("QUADRADO: " + areaQuadrado.toFixed(3))
console.log("RETANGULO: " + areaRetangulo.toFixed(3))

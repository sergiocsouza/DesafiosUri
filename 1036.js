var input = require("fs").readFileSync("stdin", "utf-8");



let [A, B, C] = input.split(" ").map(item => parseFloat (item))



let delta = Math.pow(B, 2) - 4 * A * C;

var r1 = (-B + Math.sqrt(delta)) / (2 * A);
var r2 = (-B - Math.sqrt(delta)) / (2 * A);

if ((2 * A) == 0 || delta < 0){
    console.log('Impossivel calcular')

}
else{
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
}






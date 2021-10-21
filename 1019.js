var input = require("fs").readFileSync("stdin", "utf-8");

let seconds = parseInt(input);

const valores = [3600, 60, 1]
const result = [];

for (let valor of valores){
    result.push(parseInt(seconds / valor))
    seconds = seconds % valor;
}


console.log(result.join(":"))
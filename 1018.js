var input = require("fs").readFileSync("stdin", "utf-8");

var valor = parseInt(input);

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor)

for (let nota of notas ){
    let qtd = parseInt(valor / nota);
    console.log(`${qtd} nota(s) de R$ ${nota},00`);
    valor = valor % nota;
}
var input = require("fs").readFileSync("stdin", "utf-8");

let valor = parseFloat(input);

const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
const notas = [100, 50, 20, 10, 5, 2];

console.log('NOTAS:')
for (let nota of notas){
    let qtdNotas = parseInt((valor / nota))
    valor = valor % nota
    console.log(` ${qtdNotas} nota(s) de R$ ${nota}.00`);
}
console.log('MOEDAS:')
for (let moeda of moedas){
    let qtdMoeda = parseInt((valor / moeda) + 0.00001);
    valor = valor % moeda;
    console.log(` ${parseFloat(qtdMoeda)} moeda(s) de R$ ${moeda.toFixed(2)}`);

}
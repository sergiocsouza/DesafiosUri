/* Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado. */

var input = require("fs").readFileSync("stdin", "utf-8");

var lines = input.split(" ");

let numbers = new Array (lines[0],lines[1],lines[2]);



function ordermC(){
    numbers.sort(function(a,b){
        return a-b
        
    });}

ordermC();

numbers.forEach(e=>{
    console.log((parseInt(e)))
})

console.log("")

lines.forEach(e=>{
    console.log((parseInt(e)))
})

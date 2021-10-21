var input = require("fs").readFileSync("stdin", "utf-8");

let qtdDias = parseInt(input);


let qtdAnos, qtdMeses;

qtdAnos = parseInt(qtdDias / 365); //1 ano
qtdDias = qtdDias % 365; //resto de 365, (35)
qtdMeses = parseInt(qtdDias / 30); //joguei 35 / 30 e deixei o valor inteiro
qtdDias = qtdDias % 30; //peguei o resto do 35 = 5


let resultado = `${qtdAnos} ano(s)\n
${qtdMeses} mes(es)\n
${qtdDias} dia(s)`


console.log(resultado);

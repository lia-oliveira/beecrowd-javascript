//1009 - Salário com Bônus

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nomeVendedor = lines.shift();
let salarioFixo = parseFloat(lines.shift());
let totalVendas = parseFloat(lines.shift());

let salarioComComissao = salarioFixo + (totalVendas * 0.15);

console.log(`TOTAL = R$ ${salarioComComissao.toFixed(2)}`);



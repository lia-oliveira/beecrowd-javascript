//1010 - Cálculo simples

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [codPeca1, nPeca1, valorUnitario1] = lines.shift().split(" ").map(Number);
let [codPeca2, nPeca2, valorUnitario2] = lines.shift().split(" ").map(Number);

let valorPagar = nPeca1 * valorUnitario1 + nPeca2 * valorUnitario2;

console.log(`VALOR A PAGAR: R$ ${valorPagar.toFixed(2)}`);
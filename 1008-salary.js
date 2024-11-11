// 1008 - Salário

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nFuncionario = parseInt(lines.shift());
let nHorasTrabalhadas = parseInt(lines.shift());
let valorHora = parseFloat(lines.shift());

let SALARIO = nHorasTrabalhadas * valorHora;

console.log(`NUMBER = ${nFuncionario}\nSALARY = U$ ${SALARIO.toFixed(2)}`);

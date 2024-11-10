// 1002 - Área do Círculo

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = 3.14159;
let raio = parseFloat(lines.shift());
let area = (n * Math.pow(raio, 2)).toFixed(4);
console.log(`A=${area}`);


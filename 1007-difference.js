// 1007 - Diferença

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseInt(lines.shift());
let D = parseInt(lines.shift());

let DIFERENCA = (A * B - C * D);

console.log(`DIFERENCA = ${DIFERENCA}`);
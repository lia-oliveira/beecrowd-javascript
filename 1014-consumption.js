// 1014 - Consumption

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let x = parseInt(lines.shift());
let y = parseFloat(lines.shift());

let average = (x / y).toFixed(3);

console.log(`${average} km/l`);
// 1017 - Fuel Spent

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let s = parseInt(lines.shift());
let a = parseInt(lines.shift());

let l = ((s / 12) * a).toFixed(3);

console.log(l);
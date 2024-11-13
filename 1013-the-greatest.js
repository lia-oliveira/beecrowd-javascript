// 1013 - The Greatest

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let[a, b, c] = lines.shift().split(" ").map((item) => parseInt(item));

let MAIORAB = (a + b + Math.abs(a - b)) / 2;
let MAIORC = (MAIORAB + c + Math.abs(MAIORAB - c)) / 2

console.log(`${MAIORC} eh o maior`);
// 1016 - Distance

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distanceKm = parseInt(lines.shift());

let timeMin = distanceKm * 2;

console.log(`${timeMin} minutos`);
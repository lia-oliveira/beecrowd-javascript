// 1005 - Média 1

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let A = (parseFloat(lines.shift())).toFixed(1);
let B = (parseFloat(lines.shift())).toFixed(1);

let MEDIA = ((A * 3.5) + (B * 7.5)) / (3.5 + 7.5);

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
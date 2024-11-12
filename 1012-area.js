// 1012 - Área

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines.shift().split(" ").map((item) => parseFloat(item));
let pi = 3.14159;

let areaTriangulo = A * C / 2;
let areaCirculo = pi * C * C;
let areaTrapezio = ((A + B) * C) / 2;
let areaQuadrado = B * B;
let areaRetangulo = A * B;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const PI = 3.14159
const radius = Number.parseFloat(lines[0]).toFixed(2)
const area = (PI * (Math.pow(radius, 2))).toFixed(4)
console.log(`A=${area}`)
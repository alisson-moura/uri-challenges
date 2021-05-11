var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const values = lines.filter(line => line >= 0).map(line => parseFloat(line))
const soma = values.reduce((total, num) => (total + num), 0)
let media = soma / values.length

console.log(values.length + " valores positivos")
console.log(media.toFixed(1))
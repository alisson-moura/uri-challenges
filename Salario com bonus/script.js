var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const salario = parseFloat(lines[1])
const vendas = parseFloat(lines[2])

const bonus = vendas * 0.15
const total = salario + bonus
console.log(`TOTAL = R$ ${total.toFixed(2)}`)


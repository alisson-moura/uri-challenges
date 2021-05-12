var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const x = parseInt(lines[0])
const y = parseInt(lines[1])

let imp = []
let maior = x >= y ? x : y
let menor = x < y ? x : y

for (let j = maior - 1; j > menor; j--) {
    if (j % 2 != 0) {
        imp.push(j)
    }
}

const sum = imp.reduce((total, num) => (total + num), 0)
console.log(sum)
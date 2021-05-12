var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const [n, k] = lines[1].split(" ").map(line => parseInt(line))
let array01 = []

for (let j = 1; j <= n; j++) {
    array01.push(j)
}

for (let j = 0; j < n; j++) {
    for (let i = n-1; i >= 1; i--) {
        console.log(array01[i])
    }

}

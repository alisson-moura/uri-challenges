var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let valor_original = parseInt(lines[0])
let nota_100 = 0,
  nota_50 = 0,
  nota_20 = 0,
  nota_10 = 0,
  nota_5 = 0,
  nota_2 = 0,
  nota_1 = 0

let valor = valor_original
while (valor > 0) {
  if (valor >= 100) {
    valor = valor - 100
    nota_100++
    continue
  }
  if (valor >= 50) {
    valor = valor - 50
    nota_50++
    continue
  }
  if (valor >= 20) {
    valor = valor - 20
    nota_20++
    continue
  }
  if (valor >= 10) {
    valor = valor - 10
    nota_10++
    continue
  }
  if (valor >= 5) {
    valor = valor - 5
    nota_5++
    continue
  }
  if (valor >= 2) {
    valor = valor - 2
    nota_2++
    continue
  }
  else {
    valor = valor - 1
    nota_1++
    continue
  }
}

console.log(valor_original);
console.log(nota_100 + " nota(s) de R$ 100,00");
console.log(nota_50 + " nota(s) de R$ 50,00");
console.log(nota_20 + " nota(s) de R$ 20,00");
console.log(nota_10 + " nota(s) de R$ 10,00");
console.log(nota_5 + " nota(s) de R$ 5,00");
console.log(nota_2 + " nota(s) de R$ 2,00");
console.log(nota_1 + " nota(s) de R$ 1,00");
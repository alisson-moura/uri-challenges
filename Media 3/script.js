var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

function mediaP(notas, pesos) {
    let sum = 0
    let div = 0
    for (let j = 0; j < notas.length; j++) {
        sum = sum + (notas[j] * pesos[j])
        div = div + pesos[j]
    }
    return sum / div
}

const pesos = [2, 3, 4, 1]
const notas = lines[0].split(' ').map(line => parseFloat(line))
const media = mediaP(notas, pesos)
console.log('Media: ' + media.toFixed(1))
if (media >= 7.0) {
    console.log('Aluno aprovado.')
}
else if (media < 5.0) {
    console.log('Aluno reprovado.')
}
else {
    const nota_exame = parseFloat(lines[1])
    console.log('Aluno em exame.')
    console.log('Nota do exame: ' + nota_exame.toFixed(1))
    const media_final = (media + nota_exame) / 2

    media_final >= 5.0
        ? console.log('Aluno aprovado.')
        : console.log('Aluno reprovado.')

    console.log('Media final: ' + media_final.toFixed(1))
}


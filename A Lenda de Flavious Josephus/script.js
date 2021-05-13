var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


const nc = parseInt(lines[0])

function calcResult(n, k) {
    let last = 0
    for (let j = 1; j <= n; j++) {
        last = ((last + k) % j)
    }
    return last + 1
}

for (let i = 1; i <= nc; i++) {
    let [n, k] = lines[i].split(" ").map(line => parseInt(line))
    let result = calcResult(n, k)
    console.log(`Case ${i}: ` + result)
}

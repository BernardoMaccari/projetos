var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('\n');

let positivo = 0;
let negativo = 0;
let par = 0;
let impar = 0;

let i = 0;
while(i < lines.length){
    lines[i] = parseInt(lines[i])
    if(lines[i] > 0){
        positivo++
    }
    if(lines[i] < 0){
        negativo++
    }
    if(lines[i] % 2 === 0){
        par++
    }
    if(lines[i] % 2 === 1){
        impar++
    }
    i++
}

console.log(`${par} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${positivo} valor(es) positivo(s)`)
console.log(`${negativo} valor(es) negativo(s)`)

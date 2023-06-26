var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var cem = 100;
var cinq = 50;
var vint = 20;
var dez = 10;
var cinc = 5;
var dois = 2;
var um = 1;
var cinqcent = 0.50;
var vincincent = 0.25;
var dezcent = 0.10;
var cinccent = 0.05;
var umcent = 0.01;

const valor = parseFloat(lines);

var n100 = lines - cem;
var n50 = lines - cinq;
var n20 = lines - vint; 
var n10 = lines - dez; 
var n5 = lines - cinc; 
var n2 = lines - dois; 
var m1 = lines - um; 
var m050 = lines - cinqcent; 
var m025 = lines - vincincent; 
var m010 = lines - dezcent;
var m005 = lines - cinccent;
var m001 = lines - umcent; 

console.log(`MOEDAS:`)
console.log(`${n100} nota(s) de R$ 100.00`)
console.log(`${n50} nota(s) de R$ 50.00`)
console.log(`${n20} nota(s) de R$ 20.00`)
console.log(`${n10} nota(s) de R$ 10.00`)
console.log(`${n5} nota(s) de R$ 5.00`)
console.log(`${n2} nota(s) de R$ 2.00`)
console.log(`MOEDAS:`)
console.log(`${m1} moeda(s) de R$ 1.00`)
console.log(`${m050} moeda(s) de R$ 00.50`)
console.log(`${m025} moeda(s) de R$ 00.25`)
console.log(`${m010} moeda(s) de R$ 00.10`)
console.log(`${m005} moeda(s) de R$ 00.05`)
console.log(`${m001} moeda(s) de R$ 00.01`)


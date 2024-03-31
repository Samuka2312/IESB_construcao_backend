//8. Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos. OBS: V = PI * Raio^2 * Altura

const prompt = require('prompt-sync')();

// Leia o raio e a altura do cilindro a partir do usuário
let raio = Number(prompt("Digite o valor do raio do cilindro: "));
let altura = Number(prompt("Digite o valor da altura do cilindro: "));

// Calcule o volume do cilindro
let volume = Math.PI * Math.pow(raio, 2) * altura;

// Exiba o resultado na tela
console.log("O volume do cilindro é: " + volume.toFixed(2));
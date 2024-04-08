//2. Escreva um script para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

const prompt = require('prompt-sync')();

//Receba os dados do usuário

let eleitores = Number(prompt("Digite o número total de eleitores"));
let brancos = Number(prompt("Quantos voto foram brancos?"));
let nulos = Number(prompt("Quantos votos foram nulos?"));
let validos = Number(prompt('Quantos votos em válidos houveram ? '));
//Entregue as informações solicitadas

if ((brancos + nulos + validos ) != eleitores){
    console.log('inválido pois o número de votos inseridos não é igual ao número de eleitores');
}else{
    console.log('Votos brancos percentual: '+(n2/n)*100+'%','Votos nulos percentual: '+(n3/n)*100+'%','Votos válidos percentual: '+(n4/n)*100+'%');
}



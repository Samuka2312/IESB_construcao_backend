//3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

const prompt= require ("prompt-sync")();

//Receba o valor total do salário
let salario = Number(prompt("Informe o valor do salário: "));

//Verifique o salário e exiba o valor do imposto

if(salario<1320){
  console.log("O valor do imposto é: ", (salario * 0.05));
}else if(salario>1320)
  console.log("O valor do imposto é", (salario * 0.10));
 else(salario<0);
  console.log("Valor inválido!");
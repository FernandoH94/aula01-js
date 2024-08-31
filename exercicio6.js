/* Faça um algoritmo que pergunte o nome do usuário, o quanto ganha por hora
e o número de horas trabalhadas no mês. Calcule o resultado e mostre o nome e o
total da renda recebida no mês.*/

let nome = prompt("Informe o nome");
let ganhos_horas = parseFloat(prompt("Infome os ganhos por hora"));
let horas_trabalhadas = parseFloat(prompt("Informe as horas trabalhadas"));

let renda_mensal = (ganhos_horas * horas_trabalhadas)

alert(`O ${nome} recebe uma renda de R$ ${renda_mensal.toFixed(2)}`);

//Exibir no terminal
console.log("Hello world!!!");
//Exibir no navegador
document.write("Olá Navegador!");
//um alerta
alert("Alerta de Confirmação");

//string

//captura o nome do aluno
var nome = window.prompt("Informe o nome");

//guarda a nota digitada
var nota1 = window.prompt("Digite a Nota 1:");

nota1 = parseFloat(nota1);
//converte a nota1 para decimal

var nota2 = window.prompt("Digite a Nota 2:");
//guarda a nota digitada

nota2 = parseFloat(nota2);
//converte a nota2 para decimal

var media = (nota1 + nota2)/2;
//calcula a média das duas notas

var mensagem = nome + ", você obteve a média : " + media;
window.alert("A média das notas é: " + media);
//gera a mensagem de exibição do nome e da média do aluno

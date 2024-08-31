/* Faça um algoritmo que o usúario escreva o nome e o preço de três produtos e assim terminar
de escrever o ultimo produto, mostre o nome e o valor do produto mais barato. */

let produto1 = prompt("Informe o nome do produto");
let valor1 = prompt("Informe o valor do produto");
let produto2 = prompt("Informe o nome do produto");
let valor2 = prompt("Informe o valor do produto");
let produto3 = prompt("Informe o nome do produto");
let valor3 = prompt("Informe o valor do produto");

let menorValor, menorProduto

if ((valor1 <= valor2) && (valor1 <= valor3)){
    menorValor = valor1
    menorProduto = produto1;
}
else if ((valor2 <= valor1) && (valor2 <= valor3)){
    menorValor = valor2
    menorProduto = produto2;
}
else if ((valor3 <= valor1) && (valor3 <= valor2)){
    menorValor = valor3
    menorProduto = produto3;
}

alert(`O produto ${menorProduto}
     é o mais barato, custando R$ ${menorValor}`);
/* Faça um algoritmo que leia três números e mostre o maior deles.*/

let numero1 = parseInt(prompt("Informe o primeiro número"));
let numero2 = parseInt(prompt("Informe o segundo número"));
let numero3 = parseInt(prompt("Informe o terceiro número"));

if ((numero1 > numero2) && (numero1 > numero3)) {
    alert(`O número ${numero1} é maior de todos!`);
} 
else if ((numero2 > numero1) && (numero2 > numero3)){
    alert(`O número ${numero2} é maior de todos!`);    
} 
else if ((numero3 > numero1) && (numero3 > numero2)){

    alert(`O número ${numero3} é maior de todos!`);
}


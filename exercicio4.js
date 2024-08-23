/* Faça um algoritmo que leia três números e mostre o maior deles.*/

let numero1 = parseInt(prompt("Informe o primeiro número"));
let numero2 = parseInt(prompt("Informe o segundo número"));
let numero3 = parseInt(prompt("Informe o terceiro número"));

if ((numero1 > numero2) && (numero1 > numero3)) {
    alert("O número 1 é o maior")   

} else if ((numero2 > numero1) && (numero2 > numero3)){
    alert("O número 2 é o maior")
    
} else if ((numero3 > numero1) && (numero3 > numero2)){

    alert("O número 3 é o maior");
}


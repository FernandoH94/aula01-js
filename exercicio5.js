/* Faça um algoritmo que leia três números e mostre o maior e menor deles.*/

let numero1 = parseInt(prompt("Informe o primeiro número"));
let numero2 = parseInt(prompt("Informe o segundo número"));
let numero3 = parseInt(prompt("Informe o terceiro número"));
let maior, menor;

//Bloco do maior
if ((numero1 >= numero2) && (numero1 >= numero3)) {
    maior = numero1;
}
else if ((numero2 >= numero1)&& (numero2 >= numero3)){
    maior = numero2;
}
else if ((numero3 >= numero1) && (numero3 >= numero2)){
    maior = numero3;
}

//Bloco do menor
if((numero1 <= numero2) && (numero1 <= numero3)){
    menor = numero1;
}
else if ((numero2 <= numero1) && (numero1 <= numero3)){
    menor + numero2;
}
else if ((numero3 <= numero1) && (numero3 <= numero2)){
    menor = numero3
}

alert(`O número ${maior} é maior de todos! 
        E o ${menor} é o menor de todos!`);

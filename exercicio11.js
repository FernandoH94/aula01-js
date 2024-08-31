/* Faça um algoritmo que faz uma conversão de temperaturas onde.
    1. Converter Celsius para Fahrenheit. Formula: ( celsius * 9/5) + 32
    2. Converter Fahrenheit para Celsius. formula: ( fahrenheit - 32 * 5/9)
*/

let textoMenu = `CONVERSOR DE TEMPERATURA
Escolha uma opção.
1. Celsius (°C) para Fahrenheit(°F). 
2. Fahrenheit(°F) para Celsius(°C).
`;
let grauEscolhido = parseFloat(prompt(textoMenu));
let conver, result;

switch (grauEscolhido) {
    case 1:

        conver = parseInt(prompt("Digite quantos °C: "));
        result = (conver * 9 / 5 + 32);

        alert(`O Resultado é: ${result}`);
        break;

    case 2:

        conver = parseInt(prompt("Digite quantos °F: "));
        result = ((conver - 32) * 5 / 9);

        alert(`O resultado é: ${result}`);
        break;
    default:
        alert(`Opção Inválida`);
        break
}
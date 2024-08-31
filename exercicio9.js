/* Faço um algoritmo que pergunte em que turno o usúario estuda.
Peça para digitar M - matutino, V - vespertino ou N - noturno.
Imprima a mensagem "Bom dia!", "Boa tarde!" ou "Boa noite!" ou "Valor Iválido!", conforme o caso digitado. */


let textoMenu = `Em qual turno você estuda? 
                M - Matutino
                V - Vespertino
                N - Noturno`;

// Converte a string do campo digitado no prompt para número inteiro

let turnoEscolhido = (prompt(textoMenu));
let turno;

switch (turnoEscolhido.toUpperCase()) {
    case 'M':
        turno = 'Bom dia!';
        break;
    case 'V':
        turno = 'Boa tarde!';
        break;
    case 'N':
        turno = 'Boa noite!';
        break;
    default:
        turno = 'Turno Iválido';
        break;

}

alert(`${turno}`);



/* Faça um algoritmo que leia um nome de usuário e sua senha. A senha não pode ser 
igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
*/

let nome, senha;
 
do {
  nome = prompt("Digite seu nome de usuário:");
  senha = prompt("Digite sua senha:");
 
    if (nome === senha) {
    alert("Erro: A senha não pode ser igual ao nome do usuário. Tente novamente.");
  }
} while (nome === senha);
 
alert("Cadastro realizado com sucesso!");
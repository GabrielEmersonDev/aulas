// Dias da Semana:

// Crie um programa que solicita ao usuário um número correspondente a um dia da semana (1 para Domingo, 2 para Segunda-feira, etc.).
// Use a instrução switch para exibir o nome do dia correspondente.
// Meses do Ano:

// Faça um programa que pede ao usuário para inserir um número de 1 a 12, representando um mês do ano.
// Use a instrução switch para exibir o nome do mês correspondente.
// Tipo de Animal:

// Escreva um programa que solicita ao usuário inserir o nome de um animal.
// Use a instrução switch para exibir uma mensagem indicando se o animal é um mamífero, réptil, ave, ou outro.
// Conversão de Notas:

// Solicite ao usuário uma nota de 0 a 100.
// Use a instrução switch para converter a nota em uma classificação: A (90-100), B (80-89), C (70-79), D (60-69), F (<60).
// Cores do Arco-Íris:

// Crie um programa que pede ao usuário para inserir um número de 1 a 7, representando uma cor do arco-íris.
// Use a instrução switch para exibir o nome da cor correspondente.

let numero1 = 1000;
let numero2 = 10;
let operacao = "e";

switch (operacao) {
  case "+":
    console.log(`A soma é: ${numero1 + numero2}`);
    break;

  case "-":
    console.log(`A soma é: ${numero1 - numero2}`);
    break;

  case "*":
    console.log(`A multiplicação é: ${numero1 * numero2}`);
    break;

  case "/":
    console.log(`A divisão é: ${numero1 / numero2} `);
    break;

  default:
    console.log("Operação Inválida");
}

// // Você é um contador que está ajudando uma pequena empresa a calcular os
// salários dos funcionários. Cada funcionário recebe um salário fixo por hora,
// //  mas o número de horas trabalhadas pode variar de semana para semana.
// Escreva um programa em JavaScript que solicite ao usuário que insira
//  o número de horas trabalhadas
// //   por semana para cada funcionário, até que o usuário insira
//  um valor negativo para indicar o final da entrada.
// //  O programa deve então calcular e exibir o salário total de cada funcionário.
// //  Considere que o salário por hora é fixo para todos os funcionários.

let contador = 0;
let salario = 1000;
let salarioTotal = 0;
let horasTrabalhadas = -1;

if (horasTrabalhadas >= 0) {
  while (contador <= horasTrabalhadas) {
    if (horasTrabalhadas >= 0) {
      salarioTotal = salario * horasTrabalhadas;
    } else if (horasTrabalhadas < 0) {
      console.log("Não pode ser negativo");
    }
    contador += 1;
  }
  console.log(salarioTotal);
} else {
  console.log("HT invalida");
}

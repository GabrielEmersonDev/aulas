// Crie um programa que calcula a média de 5 números inseridos pelo usuário usando um loop for.

const notas = [6.0, 5.0, 9.5, 5.0, 8.8];
const quantNotas = 5;

// for (let i = 1; i <= 5; i++) {
//   soma = soma + notas[i];
//   console.log(soma);
// }

// let media;
// media = soma / notas.length;
// console.log("A media do aluno foi:", media.toFixed(2), "parabens");

const somaNotas = notas.reduce((total, nota) => total + nota, 0);

console.log(somaNotas);

let media = somaNotas / quantNotas;

console.log(media.toFixed(2));

if (media >= 7) {
  console.log("Aluno aprovado!", media.toFixed(2), "de media");
} else {
  console.log("Aluno reprovado: ", media.toFixed(2), "Tente estudar mais");
}

// // Questão: Calculadora de Fatorial

// // Implemente uma função em JavaScript que calcula o fatorial de um número usando um loop for.
// //  O fatorial de um número é o produto de todos os inteiros positivos até esse número.

// Crie uma função chamada calcularFatorial que recebe um número como parâmetro.
// Implemente o cálculo do fatorial usando um loop for.
// Teste a função com diferentes valores, como nos exemplos de uso fornecidos.
// Essa questão envolve o entendimento do conceito de fatorial, a aplicação do loop for e o uso adequado de variáveis.
//  Boa sorte!~

const num1 = 4;
let primeiro = 1;

for (let i = 2; i <= num1; i++) {
  primeiro = primeiro * i;
  console.log(primeiro);
}

console.log(primeiro);

// Exercício 3: Lista de Múltiplos
// Objetivo: Dado um número, listar seus primeiros 10 múltiplos.

const num1 = 100;
let multiplos = 10;
let soma = 0;

for (let i = 1; i <= multiplos; i++) {
  soma = num1 * i;
  console.log(soma);
}

// Escreva um programa em JavaScript que solicite ao usuário que insira um número.
//  O programa deve então imprimir todos os números pares de 0 até o número inserido pelo usuário usando um loop while.

const num1 = 10;
let contador = 0;

while (contador <= num1) {
  if (contador % 2 === 0) {
    console.log(contador);
  }
  contador = contador + 1;
}

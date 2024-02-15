// Verificar Tipo de Triângulo:

// Você está desenvolvendo um programa para verificar o tipo de triângulo com base em seus lados.
//  Escreva uma expressão ternária em JavaScript que receba três números
//  (representando os lados de um triângulo) e retorne uma mensagem indicando se o triângulo é
//   "Equilátero" (todos os lados iguais), "Isósceles" (dois lados iguais) ou "Escaleno"
//   (todos os lados diferentes).

// Exemplo:

//( condição) ? 'Valor para verdadeiro' : " Valor para falso"

const lado1 = 3;
const lado2 = 3;
const lado3 = 3;
const tipoTriangulo =
  lado1 === lado2 && lado2 === lado3
    ? "Equilátero"
    : lado1 === lado2 || lado2 === lado3 || lado1 === lado3
    ? "Isósceles"
    : "Escaleno";

console.log(tipoTriangulo);

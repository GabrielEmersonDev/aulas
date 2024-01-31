// Escreva um programa em JavaScript que recebe três números como entrada, que representam os lados de um triângulo. O programa deve determinar e imprimir se o triângulo é equilátero, isósceles ou escaleno. Considere as seguintes definições:

// Triângulo Equilátero: possui todos os lados iguais.
// Triângulo Isósceles: possui dois lados iguais.
// Triângulo Escaleno: possui todos os lados diferentes.

const lado1 = 3;
const lado2 = 2;
const lado3 = 7;

if ( lado1 === lado2 && lado3 != lado1 || lado2 === lado3 && lado1 != lado2 || lado3 === lado1 && lado2 != lado3) {
    console.log("trianguli possui 2 lados iguais")
} else if (lado1 === lado2 && lado3 === lado2) {
    console.log("tringulo equilatero, possui 3 lados iguais")
} else {
    console.log("triangulo escaleno, tem 3 lados diferentes");
}
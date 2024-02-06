// Escreva um programa em JavaScript que imprima os números
// pares de 0 a 10 utilizando um
// loop while.

let numero = 0;

while (numero <= 10) {
  if (numero % 2 == 0) {
    console.log("numero par", numero);
  } else {
    console.log("numero impar", numero);
  }
  numero = numero + 1;
}

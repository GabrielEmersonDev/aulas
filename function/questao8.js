// // Crie uma função chamada
// calcularPotencia que recebe dois números como
// parâmetros: a base (um número inteiro) e o expoente
// // (um número inteiro não negativo). A função deve calcular e retornar o
//  resultado da potência da base elevada ao expoente.
// // Por exemplo, se a base for 2 e o expoente for 3, a função deve retornar 8
// // (porque 2^3 = 2 * 2 * 2 = 8).

function calcularPotencial(num1, num2) {
  //parametros
  if (num2 <= 1) {
    //argumentos
    console.log("Digite um numero de 1 para cima");
    return;
  }

  let potencia;
  potencia = num1 ** num2;
  return potencia;
}

const potencia = calcularPotencial(4, 2);
console.log(potencia);

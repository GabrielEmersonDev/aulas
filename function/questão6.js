// Implemente uma função chamada calcularFatorial que recebe um número
// inteiro positivo como
// parâmetro e retorna o fatorial desse número.

function calcularFatorial(num1) {
  let resultado = 1;
  for (i = 1; i <= num1; i++) {
    resultado *= i;
  }
  return resultado;
}

const calFatorial = calcularFatorial(3);
console.log(calFatorial);

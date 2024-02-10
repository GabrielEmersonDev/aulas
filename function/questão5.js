// Crie uma função chamada verificarPrimo que recebe um número como parâmetro e retorna true
// se o número for primo e false caso contrário.

function verificarPrimo(num1) {
  let eleE = false;
  if (num1 == 1 || num1 == 2) {
    eleE = true;
    return eleE;
  } else if (num1 <= 0) {
    console.log("Numero igual ou abaixo de zero não são aceitos");
  } else if (num1 >= 3) {
    let contador = 0;
    for (let i = 1; i <= num1; i++) {
      if (num1 % i == 0) {
        contador += 1;
      }
      if (contador == 2) {
        eleE = true;
      } else {
        eleE = false;
      }
    }
  }
  return eleE;
}

const verPrimo = verificarPrimo(11);
console.log(verPrimo);

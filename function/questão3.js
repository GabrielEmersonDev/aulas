// Crie uma função em JavaScript chamada calcularIMC que calcula o Índice de Massa Corporal (IMC). A função deve receber dois parâmetros: peso
//  (em quilogramas) e altura (em metros).
// O IMC é calculado dividindo o peso pela altura ao quadrado. Retorna o valor do IMC calculado.

function calcumarIMC(peso, altura) {
  //parametros
  let IMC;
  IMC = peso / (altura * altura); //argumentos
  return IMC;
}

const calIMC = calcumarIMC(80, 1.78);
console.log(calIMC.toFixed(2));

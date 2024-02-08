// Exercício 4: Tabela de Quadrados e Cubos
// Objetivo: Exibir uma tabela dos quadrados e cubos dos números de 1 a N.

const num1 = 5;
let quadrado = 0;
let cubo = 0;

for (let i = 1; i <= num1; i++) {
  quadrado = 0;
  cubo = 0;
  quadrado = i * i;
  cubo = i * i * i;
  console.log("O quadrado de: ", i, "é", quadrado);
  console.log("O cubo de: ", i, "é", cubo);
}

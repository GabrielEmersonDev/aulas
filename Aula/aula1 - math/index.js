// let num1 = 1;
// let num2 = 2.5;

// console.log(num1.toString() + num2);
// console.log(typeof num1);

// console.log(num1.toString(2));
// console.log(num1.toFixed(2));
// console.log(Number.isInteger(num1));

// let num1 = 9.5132;
// let num2 = Math.floor(num1); // arredonda para baixo
// let num2 = Math.ceil(num1); // para cima

// let num2 = Math.round(num1); Mais proximo

// console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)); // pega o maior da sequencia
// console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)); // pega o menor da sequencia

// const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
// // console.log(Math.random());

// console.log(aleatorio);

// const num1 = 4;
// const num2 = 8;

// let randonNumberRange = Math.round(Math.random() * 10);
// console.log(randonNumberRange);

// // Atividade 1:
// // Crie um jogo de dados onde você simula o lançamento de dois dados. Use Math.random()
// para gerar um número aleatório entre 1 e 6 para cada dado.
// Em seguida, some os resultados dos dois dados e exiba o resultado.

const jogarDado1 = Math.round(Math.random() * 6);
const jogarDado2 = Math.round(Math.random() * 6);
const dado1 = jogarDado1;
const dado2 = jogarDado2;

console.log("Valor do primeiro dado rolado:", dado1);
console.log("Valor do primeiro dado rolado:", dado2);

let soma = dado1 + dado2;

if (dado1 > dado2) {
  console.log("O dado 1 ganhou por ter tirado a maior pontuação:", dado1);
} else {
  console.log("O dado 2 ganhou por ter tirado a maior pontuação:", dado2);
}
console.log("A soma dos dados", dado1, "e", dado2, "é:", soma);

// Atividade 2:
// Desenvolva um programa que gera um número aleatório entre 1 e 100. Peça ao usuário para adivinhar o número.
//  Use Math.random() para gerar o número aleatório e Math.round() para arredondar, se necessário.
//  Forneça dicas ao usuário se o palpite for muito alto ou muito baixo, até que ele acerte o número.

// Essas atividades devem fornecer um bom exercício para praticar o uso de Math.random() e Math.round(). Boa sorte e divirta-se tentando implementá-las!

const adivinhar = Math.round(Math.random() * 10);
const numeroSelecionado = Math.round(Math.random() * 10);

let numAdvinhar = adivinhar;
let numSelecionado = numeroSelecionado;

console.log(numAdvinhar);
console.log(numSelecionado);

if (numAdvinhar == numSelecionado) {
  console.log(
    "parabens acertou advinhou o numero:",
    numAdvinhar,
    ". numero selecionado:",
    numSelecionado
  );
} else if (numAdvinhar > numSelecionado) {
  console.log(
    "ERROUUU, numero maior que o selecionado: ",
    numSelecionado,
    ". Numero advinhado:",
    numAdvinhar
  );
} else if (numAdvinhar < numSelecionado) {
  console.log(
    "ERRROU, numero menor que o selecionado",
    numSelecionado,
    ". Numero advinhado:",
    numAdvinhar
  );
}

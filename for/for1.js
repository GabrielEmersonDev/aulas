// Escreva um programa que utilize um loop for para imprimir o seguinte padrão:

// 1
// 22
// 333
// 4444
// 55555

// const num1 = 5;
// let numbers = "";
// let number;

// for (i = 1; i <= num1; i++) {
//   console.log(i);
//   number = toString(i);
//   console.log(number.i);
//   numbers = numbers + number;
//   console.log(toString(i));
//   console.log(numbers);
// }

const linhas = 5;

for (let i = 1; i <= linhas; i++) {
  let linha = "";

  for (let j = 1; j <= i; j++) {
    linha = linha + i;
  }
  console.log(linha);
}

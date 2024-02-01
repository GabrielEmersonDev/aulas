// Crie um programa que imprima a tabuada do 7 usando um loop for.

// const num1 = 7;
// let total;

// for (let i = 0; i <= 10; i++) {
//   total = i * 7;
//   console.log(
//     `O valor da multiplicação de ${[i]} por ${[num1]} é de: ${[total]}`
//   );
// }

function tabuada(n) {
  for (let i = 0; i <= 10; i++) {
    console.log(i * n);
  }
}

tabuada(6);

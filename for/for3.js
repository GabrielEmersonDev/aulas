//Calcule a soma dos números pares de 1 a 10 usando um loop for.

let soma = 0;

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log([i]);
    soma = soma + i;
  }
}
console.log("Soma dos números pares é :", soma, "=D");

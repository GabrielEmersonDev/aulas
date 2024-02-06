// Escreva um programa em JavaScript que calcule a soma dos quadrados dos números pares de 1 a 1000. Utilize um loop for para iterar de 1 a 1000 e,
//  dentro do loop, verifique se o número é par. Se for par, adicione o quadrado do número à soma.

let soma = 0;

for (let i = 0; i <= 1000; i++) {
  if (i % 2 == 0) {
    soma = soma + i * i;
    console.log(i);
  }
}

console.log(soma.toFixed(2));

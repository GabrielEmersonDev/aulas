// Padrão de Soma Cumulativa:
// Escreva um programa que utilize um loop for para imprimir o seguinte padrão:

// Copy code
// 1
// 3
// 6
// 10
// 15
// Cada número na sequência é a soma cumulativa dos números anteriores.

const seq = 5;
let total = 0;

for (let i = 1; i <= seq; i++) {
  total = total + i;
  console.log(total);
}

// Tabuleiro de Xadrez:
// Implemente um programa que use dois loops
// for para imprimir um tabuleiro de xadrez 8x8, onde
// "X" e "O" representam as casas.

for (let i = 1; i <= 8; i++) {
  if (i % 2 != 0) {
    console.log("X0X0X0X0");
  } else {
    console.log("0X0X0X0X");
  }
}

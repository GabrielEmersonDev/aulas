// Um jogador está jogando um jogo onde ele pode lançar um dado quantas vezes desejar.
// Cada vez que ele lança o dado, o número obtido é somado ao total de pontos. No entanto, se ele tirar um 1 no dado,
//  ele perde todos os pontos acumulados até o momento e o jogo termina. Escreva um programa em JavaScript que simule este jogo.
//   O programa deve solicitar ao jogador que lance o dado (simbolizado por um número aleatório entre 1 e 6)
//    e exiba o número obtido em cada lance, além do total de pontos acumulados. O jogo continua até que o jogador tire um 1 ou decida parar.
//     Se o jogador decidir parar, o programa deve exibir o total de pontos acumulados.

const jogadas = [4, 6, 4, 1, 4];
let soma = 0;
let jogar = true;
contador = 0;

while (jogar || contador < jogadas.length) {
  contador += 1;
  if ((contador = jogadas.length)) {
    jogar = false;
  }

  for (let i = 0; i < jogadas.length; i++) {
    console.log("Resultado de Lançamento de dado:", jogadas[i]);
    if (jogadas[i] == 1) {
      jogar = false;
      soma = 0;
      console.log(
        "Pontuação total zerada, usuário acabou rolando número 1. Soma:",
        soma
      );
      break;
    } else {
      soma += jogadas[i];
      console.log("Total de pontos acumulados:", soma);
    }
  }
}

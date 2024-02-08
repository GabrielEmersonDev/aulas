// Exercício 1: Pontuação em um Jogo de Tabuleiro
// História: Você está jogando um jogo de tabuleiro onde cada jogador lança um dado várias vezes.
// Cada lançamento pode pontuar de maneira diferente, dependendo do número que sair no dado.

// Objetivo: Calcular a pontuação total de um jogador após uma série de lançamentos de dados.

const jogadas = [1, 2, 4, 5, 6];
let soma = 0;

for (let i = 0; i < jogadas.length; i++) {
  soma += jogadas[i];
}

console.log(soma);

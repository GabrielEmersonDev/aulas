// Exercício 1: Classificação de Atletas em uma Corrida
// História: Em uma corrida, os atletas são classificados em diferentes categorias, e cada um tem vários tempos registrados.
// A classificação depende da média dos tempos.

// Objetivo: Calcular a média dos tempos para cada atleta e classificá-los em categorias com base nessa média.
// 2 - 3 segundos master
// 3.1 - 8 segundos pro
// abaixo de 2 - segundos categoria top

// categorias= pesado e leve

const atletas = [
  {
    nome: "rodrigues",
    categoria: "pesado",
    tempo: 2,
  },
  { nome: "rogerio", categoria: "leve", tempo: 1 },
  { nome: "cleiton", categoria: "pesada", tempo: 5 },
];

for (let i = 0; i < atletas.length; i++) {
  if (atletas[i].tempo < 2) {
    console.log(
      "O Atleta",
      atletas[i].nome,
      "que pertence a categoria",
      atletas[i].categoria,
      "pertence a liga TOP pelo seu tempo de",
      atletas[i].tempo
    );
  } else if (atletas[i].tempo >= 2 && atletas[i].tempo <= 3) {
    console.log(
      "O Atleta",
      atletas[i].nome,
      "que pertence a categoria",
      atletas[i].categoria,
      "pertence a liga MASTER pelo seu tempo de",
      atletas[i].tempo
    );
  } else if (atletas[i].tempo >= 3.1 && atletas[i].tempo <= 8) {
    console.log(
      "O Atleta",
      atletas[i].nome,
      "que pertence a categoria",
      atletas[i].categoria,
      "pertence a liga MASTER pelo seu tempo de",
      atletas[i].tempo
    );
  }
}

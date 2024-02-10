// Escreva uma função em JavaScript chamada calcularMedia que recebe três
// parâmetros (nota1, nota2, nota3) e retorna a média aritmética das três notas.

function calcularMedia(a, b, c) {
  const media = (a + b + c) / 3;
  return media;
}

const media = calcularMedia(7, 7, 8);
console.log(media);

// Escreva uma função chamada calcularDistancia que recebe as coordenadas (x1, y1) e (x2, y2)
//  de dois pontos no plano cartesiano e retorna a distância entre esses dois pontos.

function calcularDistancia(x1, y1, x2, y2) {
  let distancia;
  distancia = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
  return distancia;
}

const calcularPonto = calcularDistancia(1, 2, 5, 6);
console.log(calcularPonto.toFixed(2));

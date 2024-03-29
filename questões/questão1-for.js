// sistema que calcula media de aluno em uma serie de testes
//regras : Coletar um conjunto fixo de notas 5- 5000
//e cada nota varia de 0 a 10
//calculo da media, a media aritmetica deve ser coletada

const notas = [
  7.5, 8.2, 6.9, 5.6, 9.3, 3.8, 4.5, 8.9, 2.7, 6.1, 9.7, 4.2, 5.9, 7.8, 3.5,
  8.6, 6.4, 9.1, 2.3, 4.9, 7.2, 8.4, 5.3, 6.7, 3.2, 9.5, 4.0, 7.1, 5.1, 8.0,
  6.2, 3.9, 9.0, 2.5, 4.7, 7.4, 5.8, 8.8, 6.5, 9.6, 3.4, 5.4, 2.9, 7.7, 4.3,
  6.8, 8.3, 5.2, 9.2, 3.7, 4.8, 7.5, 8.2, 6.9, 5.6, 9.3, 3.8, 4.5, 8.9, 2.7,
  6.1, 9.7, 4.2, 5.9, 7.8, 3.5, 8.6, 6.4, 9.1, 2.3, 4.9, 7.2, 8.4, 5.3, 6.7,
  3.2, 9.5, 4.0, 7.1, 5.1, 8.0, 6.2, 3.9, 9.0, 2.5, 4.7, 7.4, 5.8, 8.8, 6.5,
  9.6, 3.4, 5.4, 2.9, 7.7, 4.3, 6.8, 8.3, 5.2, 9.2, 3.7, 4.8, 7.5, 8.2, 6.9,
  5.6, 9.3, 3.8, 4.5, 8.9, 2.7, 6.1, 9.7, 4.2, 5.9, 7.8, 3.5, 8.6, 6.4, 9.1,
  2.3, 4.9, 7.2, 8.4, 5.3, 6.7, 3.2, 9.5, 4.0, 7.1, 5.1, 8.0, 6.2, 3.9, 9.0,
  2.5, 4.7, 7.4, 5.8, 8.8, 6.5, 9.6, 3.4, 5.4, 2.9, 7.7, 4.3, 6.8, 8.3, 5.2,
  9.2, 3.7, 4.8, 7.5, 8.2, 6.9, 5.6, 9.3, 3.8, 4.5, 8.9, 2.7, 6.1, 9.7, 4.2,
  5.9, 7.8, 3.5, 8.6, 6.4, 9.1, 2.3, 4.9, 7.2, 8.4, 5.3, 6.7, 3.2, 9.5, 4.0,
  7.1, 5.1, 8.0, 6.2, 3.9, 9.0, 2.5, 4.7, 7.4, 5.8, 8.8, 6.5, 9.6, 3.4, 5.4,
  2.9, 7.7, 4.3, 6.8, 8.3, 5.2, 9.2, 3.7, 4.8, 7.5, 8.2, 6.9, 5.6, 9.3, 3.8,
  4.5, 8.9, 2.7, 6.1, 9.7, 4.2, 5.9, 7.8, 3.5, 8.6, 6.4, 9.1, 2.3, 4.9, 7.2,
  8.4, 5.3, 6.7, 3.2, 9.5, 4.0, 7.1, 5.1, 8.0, 6.2, 3.9, 9.0, 2.5, 4.7, 7.4,
  5.8, 8.8, 6.5, 9.6, 3.4, 5.4, 2.9, 7.7, 4.3, 6.8, 8.3, 5.2, 9.2, 3.7, 4.8,
  7.5, 8.2, 6.9, 5.6, 9.3, 3.8, 4.5, 8.9, 2.7, 6.1, 9.7, 4.2, 5.9, 7.8, 3.5,
  8.6, 6.4, 9.1, 2.3, 4.9, 7.2, 8.4, 5.3, 6.7, 3.2, 9.5, 4.0, 7.1, 5.1, 8.0,
  6.2, 3.9, 9.0, 2.5, 4.7, 7.4, 5.8, 8.8, 6.5, 9.6, 3.4, 5.4, 2.9, 7.7, 4.3,
  6.8, 8.3, 5.2, 9.2, 3.7, 4.8, 7.5, 8.2, 6.9, 5.6, 9.3, 3.8, 4.5, 8.9, 2.7,
  6.1, 9.7, 4.2, 5.9, 7.8, 3.5, 8.6, 6.4, 9.1, 2.3, 4.9, 7.2, 8.4, 5.3, 6.7,
  3.2, 9.5, 4.0, 7.1, 5.1, 8.0, 6.2, 3.9, 9.0, 2.5, 4.7, 7.4, 5.8, 8.8, 6.5,
  9.6, 3.4, 5.4, 2.9, 7.7, 4.3, 6.8, 8.3, 5.2, 9.2, 3.7, 4.8, 7.5, 8.2, 6.9,
  5.6, 9.3, 3.8, 4.5, 8.9, 2.7, 6.1, 9.7, 4.2, 5.9, 7.8, 3.5, 8.6, 6.4, 9.1,
  2.3, 4.9, 7.2, 8.4, 5.3, 6.7, 3.2, 9.5, 4.0, 7.1, 5.1, 8.0, 6.2, 3.9, 9.0,
  2.5, 4.7, 7.4, 5.8, 8.8, 6.5, 9.6, 3.4, 5.4, 2.9, 7.7, 4.3, 6.8, 8.3, 5.2,
  9.2, 3.7, 4.8, 7.5, 8.2, 6.9, 5.6, 9.3, 3.8, 4.5, 8.9, 2.7, 6.1, 9.7, 4.2,
  5.9, 7.8, 3.5, 8.6, 6.4, 9.1, 2.3, 4.9, 7.2, 8.4, 5.3, 6.7, 3.2, 9.5, 4.0,
  7.1, 5.1, 8.0, 6.2, 3.9, 9.0, 2.5, 4.7, 7.4, 5.8, 8.8, 6.5, 9.6, 3.4, 5.4,
  2.9, 7.7, 4.3, 6.8, 8.3, 5.2, 9.2, 3.7, 4.8, 7.5, 8.2, 6.9, 5.6, 9.3, 3.8,
  4.5, 8.9, 2.7, 6.1, 9.7, 4.2, 5.9, 7.8, 3.5, 8.6, 6.4, 9.1, 2.3, 4.9, 7.2,
  8.4, 5.3, 6.7, 3.2, 9.5, 4.0, 7.1, 5.1, 8.0, 6.2, 3.9, 9.0, 2.5, 4.7, 7.4,
  5.8, 8.8, 6.5, 9.6, 3.4, 5.4, 2.9, 7.7, 4.3, 6.8, 8.3, 5.2, 9.2, 3.7, 4.8,
  7.5, 8.2, 6.9, 5.6, 9.3, 3.8, 4.5, 8.9, 2.7, 6.1, 9.7, 4.2, 5.9, 7.8, 3.5,
  8.6, 6.4, 9.1, 2.3, 4.9, 7.2, 8.4, 5.3, 6.7, 3.2, 9.5, 4.0, 7.1, 5.1, 8.0,
  6.2, 3.9, 9.0, 2.5, 4.7, 7.4, 5.8, 8.8, 6.5, 9.6, 3.4, 5.4, 2.9, 7.7, 4.3,
  6.8, 8.3, 5.2, 9.2, 3.7, 4.8, 5.1, 5.1, 5.1, 5.1,
];

let totalNotas = 0;

for (let i = 0; i < notas.length; i++) {
  totalNotas = totalNotas + notas[i];
}

let totalMedia;
let quantNotas = notas.length;
totalMedia = totalNotas / quantNotas;

let Aprovado;

Aprovado = totalNotas / quantNotas;

console.log("quantidade somatoria das notas:", totalNotas.toFixed(2));
console.log("quantidade de provas feitas", quantNotas);

if (Aprovado >= 7) {
  console.log(
    "Aluno com media:",
    Aprovado.toFixed(2),
    ", Parabens pelo seu sucesos"
  );
} else if (Aprovado <= 6.9 && Aprovado >= 0) {
  console.log(
    "Aluno com media:",
    Aprovado.toFixed(2),
    "Infelizmente você não passou"
  );
}

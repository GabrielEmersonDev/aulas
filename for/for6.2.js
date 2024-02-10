// Desenvolva uma lógica que calcule a média ponderada de notas onde cada nota tem um peso

// Regras:
// solicitar o número de notas a serem inseridas
// para cada nota, informar o valor da nota e o seu respectivo peso
// calcular a média ponderada das notas, utilizando a fórmula:
// média ponderada = (Nota1 * Peso1 + Nota2 * Peso2 + ... + NotaN * PesoN) / (Peso1 + Peso2 + ... + PesoN)

const notas = [5.9, 7.0, 9.9, 10, 4.5];
const pesos = [2.0, 1.0, 3.0, 3.0, 1];
let provas;
let media = 0;
let peso = 0;

for (let i = 0; i < notas.length; i++) {
  provas = notas[i] * pesos[i];
  console.log(provas.toFixed(2));
  peso = peso + pesos[i];
  media = media + provas;
}

console.log(peso, "esse é o peso final");
console.log(media, "Essa é a media final");

let mediaPonderada = media / peso;

if (mediaPonderada != 7) {
  console.log("parabens você passou com nota media de :", mediaPonderada);
} else if (mediaPonderada <= 6.9 && mediaPonderada >= 0) {
  console.log(
    "infelizmente você não passou com nota media de :",
    mediaPonderada
  );
} else {
  console.log("nota invalida");
}

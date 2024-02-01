// Desenvolva uma lógica que calcule a média ponderada de notas onde cada nota tem um peso

// Regras:
// solicitar o número de notas a serem inseridas
// para cada nota, informar o valor da nota e o seu respectivo peso
// calcular a média ponderada das notas, utilizando a fórmula:
// média ponderada = (Nota1 * Peso1 + Nota2 * Peso2 + ... + NotaN * PesoN) / (Peso1 + Peso2 + ... + PesoN)

const notas = [5.9, 7.0, 9.9, 10, 4.5];
const pesos = [2.0, 1.0, 3.0, 3.0, 1];

const somaNotas = notas.reduce(
  (total, nota, index) => total + nota * pesos[index],
  0
);

const somaPesos = pesos.reduce((total, peso) => total + peso, 0);

const mediaPonderada = somaNotas / somaPesos;
console.log(mediaPonderada.toFixed(2));

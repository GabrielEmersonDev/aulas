// Certamente! Aqui está outra questão moderada para você resolver:

// Classificação de Notas:

// Você está desenvolvendo um sistema de avaliação de notas. Escreva uma expressão ternária em JavaScript que receba uma nota (em escala de 0 a 100)
// e retorne a classificação de acordo com a tabela abaixo:

// Nota de 90 a 100: "A"
// Nota de 80 a 89: "B"
// Nota de 70 a 79: "C"
// Nota de 60 a 69: "D"
// Nota abaixo de 60: "F"

const nota = 90;

const avaliacao =
  nota >= 90
    ? "A"
    : nota >= 80
    ? "B"
    : nota >= 70
    ? "C"
    : nota >= 60
    ? "D"
    : "F";

console.log(avaliacao);

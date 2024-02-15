la6; // Calculadora de IMC:

// // Você está desenvolvendo uma calculadora
// de Índice de Massa Corporal (IMC).
// Escreva uma expressão ternária em JavaScript que
//  receba o peso (em quilogramas) e a altura
// (em metros) de uma pessoa e retorne a categoria de
// IMC de acordo com a tabela abaixo:

// IMC menor que 18.5: "Abaixo do Peso"
// IMC de 18.5 a 24.9: "Peso Normal"
// IMC de 25 a 29.9: "Sobrepeso"
// IMC de 30 a 34.9: "Obesidade Grau I"
// IMC de 35 a 39.9: "Obesidade Grau II"
// IMC 40 ou mais: "Obesidade Grau III"

//( condição) ? 'Valor para verdadeiro' : " Valor para falso"

const peso = 150;
const altura = 1.75;
const imc = peso / (altura * altura);
const categoriaIMC =
  imc >= 40
    ? "Obesidade Grau III"
    : imc >= 35
    ? "Obesidade Grau II"
    : imc >= 30
    ? "Obesidade Grau I"
    : imc >= 25
    ? "Sobrepeso"
    : imc > 18.5
    ? "Peso normal"
    : "Abaixo do Peso";

console.log(`Categoria de IMC: ${categoriaIMC}`);

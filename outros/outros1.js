// const dia = new Date().getDay();

// let diaSemana = {
//   0: "Domingo",
//   1: "Segunda-feira",
//   2: "Terça-feira",
//   3: "Quarta-feira",
//   4: "Quinta-feira",
//   5: "Sexta-feira",
//   6: "Sábado",
// };

// console.log(diaSemana[dia]); // Acessando o dia da semana correspondente ao número retornado por getDay()

const dia = new Date().getDay();

let diaSemana = {
  0: "Domingo",
  1: "Segunda-feira",
  2: "Terça-feira",
  3: "Quarta-feira",
  4: "Quinta-feira",
  5: "Sexta-feira",
  6: "Sábado",
};

const numeroAleatorio = Math.floor(Math.random() * 7);

const diaAleatorio = diaSemana[numeroAleatorio];

console.log("Dia aleatório:", diaAleatorio);

// Operador de  ++ Inequalidade !=
//

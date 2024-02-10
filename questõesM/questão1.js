// Exercício do sextou: Identificação de Valores Falsy

// Objetivo: Crie uma função em JavaScript que
// recebe uma array de elementos e retorna
//  a quantidade de valores falsy presentes nesse array

// Observação:

// const arrayExemplo = [0, false, '', undefined, null, NaN, 42, 'Hello', true];
// Depois de terminar se quiser mais dificuldad, faz a mesma coisa só que usando typescript
// Depois de terminar o typescript pode refazer agora usando filter

// ! nega

function acharFalsy(array) {
  let contadorFalsy = 0;

  for (let i = 0; i < array.length; i++) {
    if (!array[i]) {
      contadorFalsy++;
    }
  }
  return contadorFalsy;
}

const arrayExemplo = [
  0,
  false,
  "",
  undefined,
  null,
  NaN,
  42,
  "Hello",
  true,
  null,
  NaN,
  42,
  "Hello",
  true,
  null,
  NaN,
  42,
  "Hello",
  true,
  null,
  NaN,
  42,
  "Hello",
  true,
  null,
  NaN,
  42,
  "Hello",
  true,
];

const totalFalsy = acharFalsy(arrayExemplo);
console.log(totalFalsy);

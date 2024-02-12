// Exercício do sextou: Identificação de Valores Falsy

// Objetivo: Crie uma função em JavaScript que
// recebe uma array de elementos e retorna
//  a quantidade de valores falsy presentes nesse array

// Observação:

// const arrayExemplo = [0, false, '', undefined, null, NaN, 42, 'Hello', true];
// Depois de terminar se quiser mais dificuldad, faz a mesma coisa só que usando typescript
// Depois de terminar o typescript pode refazer agora usando filter

// ! nega

// function acharFalsy(array: any[]): number {
//   let contadorFalsy: number = 0;

//   for (let i: number = 0; i < array.length; i++) {
//     if (!array[i]) {
//       contadorFalsy++;
//     }
//   }
//   return contadorFalsy;
// }

function isFalsy(valor: boolean): boolean {
  return !valor;
}

function contarValoresFalsos(array: any[]): number {
  const valoresFalsy = array.filter(isFalsy);
  return valoresFalsy.length;
}

const arrayExemplo: (boolean | number | string | undefined | null)[] = [
  0,
  false,
  "",
  undefined,
  null,
  NaN,
  42,
  "Hello",
  true,
];

const quantidadeFalsy: number = contarValoresFalsos(arrayExemplo);

console.log(quantidadeFalsy);

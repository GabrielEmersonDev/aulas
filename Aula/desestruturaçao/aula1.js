// let a = "A"; // B
// let b = "B"; // C
// let c = "C"; // A

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);

// const numeros = [1000, 2000, 3000, 4000, 5, 6, 7, 8, 9];
// // console.log(numeros[0]); // puxar o numero 1000
// // .resto operador Rest
// // const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros; // atribuindo aos 2 primeiros index
// // console.log(primeiroNumero, segundoNumero, terceiroNumero);

// const [um, , tres, , cinco, , sete] = numeros;
// console.log(um, tres, cinco, sete);

const numeros = [
  [1, 2, 3], //1 indices 0,1,2
  [4, 5, 6], // 2 0,1,2
  [7, 8, 9], // indices 3 0,1,2
];

// const [, [, , seis]] = numeros;
const [lista1, lista2, lista3] = numeros;
// console.log(numeros[1][2]);
// console.log(seis);
console.log(lista3[2]);

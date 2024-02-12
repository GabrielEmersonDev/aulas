/*
Primitivos ( imutáveis ) - string, number, boolean, undefined,
 null ( bigint, symbol) - Valores copiados

Referêncoa ( Mutável) - Arrays , object , function - passados por 
referencia b tem o mesmo valor de a na memoria, basicament é apontar para o 
mesmo valor na memoria
*/
// let aa = [1, 2, 3];

// let aaa = [...aa]; // Spread para não apontar para o mesmo lugar mas copiar o valor independente
// let bb = aa;
// let cc = bb;

// console.log(aa, bb, aaa);

// aa.push(4);
// console.log(aa, bb, aaa);

// bb.pop(4);
// aaa.pop(2);
// console.log(aa, bb, aaa);

// console.log(cc, bb, aa, aaa);

// // 0123

// // let nome = "Gabriel";

// // nome = "Emerson";
// // nome[0] = "L";
// // console.log(nome[0], nome);

// let a = "A";
// let b = a;

// console.log(a, b);

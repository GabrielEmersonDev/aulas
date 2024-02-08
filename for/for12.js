// Exercício 4: Contagem de Votos
// História: Após uma eleição para presidente de um clube, você precisa contar os votos.

// Objetivo: Dada uma lista de votos, contar quantos votos cada candidato recebeu.

const votos = [1, 2, 1, 2, 1, 2, 1, 2, 2, 2];

let votosCandidatoA = 0;
let votosCandidatoB = 0;

for (let i = 0; i < votos.length; i++) {
  if (votos[i] == 1) {
    votosCandidatoA += 1;
  } else {
    votosCandidatoB += 1;
  }
}

console.log(votosCandidatoA);
console.log(votosCandidatoB);

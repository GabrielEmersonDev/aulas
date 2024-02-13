const pessoalA = {
  nome: "gabriel",
  sobrenome: "emerson",
};

const pessoalB = { ...pessoalA };

pessoalA.nome = "Cleiton";

console.log(pessoalB, "pessoa B");
console.log(pessoalA, "pessoa A");

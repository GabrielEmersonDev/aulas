const pessoa = {
  nome: "Luiz",
  sobrenome: "Claudio",
  idade: 30,
  endereço: {
    rua: "Av Brasil",
    numero: 320,
  },
};

// atribuição via desestruturação
// const { nome, sobrenome, idade, endereço } = pessoa;
// const { nome: bolo = "não", sobrenome, idade, endereço } = pessoa;
// const { nome = " Não tem", sobrenome, idade, endereço } = pessoa;
// const nome = pessoa.nome;
// const endereço = pessoa.endereço;
const {
  endereço: { rua: r, numero },
  endereço,
} = pessoa;
console.log(r, numero, endereço);

// // console.log(pessoa);
// console.log(pessoa);
// console.log(bolo, sobrenome, idade, endereço);
// console.log(endereço);

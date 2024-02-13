function createPeople(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  };
}

const pessoa1 = createPeople("Luiz", "otavio", 25);
console.log(pessoa1)

const pessoa2 = {
    nome: 'Gabriel',
    sobrenome: 'jose',
    idade: 25,

    fala() {
        console.log("ola mundo!");
    }
}

pessoa2.fala();
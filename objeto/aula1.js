const pessoal = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,

  fala() {
    console.log(`a minha idade atual é: ${this.idade} `);
  },

  incrementaIdade() {
    ++this.idade; // ou this.idade++ o incremento pode ser antes ou depois
  },
};

pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();

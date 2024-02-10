// Exercício: O Festival de Música
// História: Você está organizando um festival de música e precisa de um sistema para gerenciar as bandas e os palcos.
//  Cada banda tem um gênero musical e um número de integrantes, e cada palco tem um limite de público e um horário de funcionamento.

// Tarefas:

// Crie uma função criarBanda que recebe o nome da banda, gênero musical e número de integrantes, e retorna um objeto banda.
// Crie uma função criarPalco que recebe o nome do palco, limite de público e horário de funcionamento, e retorna um objeto palco.
// Crie uma função agendarBandaParaPalco que recebe uma banda, um palco e um horário. A função deve verificar se o palco está disponível nesse horário e,
//  se sim, agendar a banda para o palco.
// Crie uma função listarBandasDoPalco que recebe um palco e lista todas as bandas agendadas para ele.

function criarBanda(nome, genero, integrantes) {
  const banda = {
    nome: nome,
    genero: genero,
    integrantes: integrantes,
  };
  return banda;
}

const myBand = criarBanda("Careca", "Phonk", 6);
console.log(myBand);

function criarPalco(nome, limiteDePublico, horarioDeFuncionamento) {
  const palco = {
    nome: nome,
    limiteDePublico: limiteDePublico,
    horarioDeFuncionamento: horarioDeFuncionamento,
    bandasAgendadas: [],
  };
  return palco;
}

const myPalco = criarPalco("Palco do Careca", "100", 18.3);
console.log(myPalco);

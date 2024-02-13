// Exercício: O Festival de Música
// História: Você está organizando um festival de música e precisa de um sistema para gerenciar as bandas e os palcos.
//  Cada banda tem um gênero musical e um número de integrantes, e cada palco tem um limite de público e um horário de funcionamento.

// Tarefas:

// Crie uma função criarBanda que recebe o nome da banda, gênero musical e número de integrantes, e retorna um objeto banda.
function criarBanda(nome, genero, integrantes) {
  const banda = {
    nome: nome,
    genero: genero,
    integrantes: integrantes,
  };
  return banda;
}

const myBand = criarBanda("Careca", "Phonk", 6);
const myBand1 = criarBanda("Cabeludo", "Sertanejo Universitario", 6);
const myBand2 = criarBanda("Xesque", "Phonk", 6);
console.log(myBand);

// Crie uma função criarPalco que recebe o nome do palco, limite de público e horário de funcionamento, e retorna um objeto palco.
function criarPalco(nome, limiteDePublico, horarioDeFuncionamento) {
  const palco = {
    nome: nome,
    limiteDePublico: limiteDePublico,
    horarioDeFuncionamento: {
      abre: 8,
      fecha: 18,
    },
    bandasAgendadas: [],
  };
  return palco;
}

const myPalco = criarPalco("Palco do Careca", "100", { abre: 8, fecha: 10 });
console.log(myPalco);

// Crie uma função agendarBandaParaPalco que recebe uma banda, um palco e um horário. A função deve verificar se o palco está disponível nesse horário e,
//  se sim, agendar a banda para o palco.

function agendarBandaParaPalco(banda, palco, horario) {
  if (
    palco.horarioDeFuncionamento.abre <= horario &&
    palco.horarioDeFuncionamento.fecha > horario
  ) {
    let bandaAgendada = {
      nomeDaBanda: banda.nome,
      horarioDaBanda: horario,
    };

    let horarioConflito = false;
    for (let i = 0; i < palco.bandasAgendadas.length; i++) {
      if (palco.bandasAgendadas[i].horarioDaBanda == horario) {
        console.log(
          "Já existe uma banda com esse horario marcado",
          bandasAgendadas.nome
        );
        horarioConflito = true;
        break;
      }
    }

    if (horarioConflito == false) {
      palco.bandasAgendadas.push(bandaAgendada);
      console.log("Banda:", banda.nome, "agendou com sucesso o palco", palco);
    }
  } else {
    console.log(
      "Horario para palco inválido. Tente selecionar entre",
      palco.horarioDeFuncionamento.abre,
      "e",
      palco.horarioDeFuncionamento.fecha
    );
  }
}

const myAgenda = agendarBandaParaPalco(myBand, myPalco, 7.0);
const myAgenda1 = agendarBandaParaPalco(myBand1, myPalco, 16.0);
const myAgenda2 = agendarBandaParaPalco(myBand2, myPalco, 18.0);
console.log(myPalco);

// Crie uma função listarBandasDoPalco que recebe um palco e
// lista todas as bandas agendadas para ele.

function listarBandasDoPalco(palco) {
  if (palco.bandasAgendadas.length == 0) {
    console.log("Não há bandas marcadas nesse palco");
  } else {
    for (let i = 0; i < palco.bandasAgendadas.length; i++) {
      console.log(
        "Banda:",
        palco.bandasAgendadas[i].nomeDaBanda,
        "Está marcada no horario:",
        palco.bandasAgendadas[i].horarioDaBanda
      );
    }
  }
}

const myShow = listarBandasDoPalco(myPalco);

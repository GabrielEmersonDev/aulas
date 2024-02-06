// Crie um programa em JavaScript que pede ao usuário para inserir um dia da semana (em formato de texto, por exemplo, "segunda-feira").
//  Utilize a estrutura de controle de fluxo switch para exibir uma mensagem relacionada ao tipo de dia inserido. Por exemplo, se o usuário inserir "segunda-feira",
//   o programa deve exibir "Dia útil". Se for "sábado" ou "domingo", exiba "Fim de semana". Se for qualquer outro dia, exiba "Dia inválido".

const diaSemana = 6;

switch (diaSemana) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Dias da semana");
    break;
  case 6:
  case 7:
    console.log("Final de semana");
    break;
}

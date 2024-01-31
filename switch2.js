// Solicite ao usuário para inserir um número de 1 a 12 representando um mês.
// Utilize a instrução switch para determinar e exibir quantos dias o mês possui.

const numero = "10";
let mes;
let dias;

switch (numero) {
  case "1":
    mes = "Janeiro";
    dias = "31";
    console.log(`Mês Selecionado ${mes}, esse mês tem ${dias} dias.`);
    break;
  case "2":
    mes = "Fevereiro";
    dias = "29";
    console.log(`Mês Selecionado ${mes}, esse mês tem ${dias} dias.`);
    break;
  case "3":
    mes = "Março";
    dias = "30";
    console.log(`Mês Selecionado ${mes}, esse mês tem ${dias} dias.`);
    break;
  case "4":
    mes = "Abril";
    dias = "30";
    console.log(`Mês Selecionado ${mes}, esse mês tem ${dias} dias.`);
    break;
  case "5":
    mes = "Maio";
    dias = "31";
    console.log(`Mês Selecionado ${mes}, esse mês tem ${dias} dias.`);
    break;
  case "6":
    mes = "Junho";
    dias = "29";
    console.log(`Mês Selecionado ${mes}, esse mês tem ${dias} dias.`);
    break;
  case "7":
    mes = "Junho";
    dias = "31";
    console.log(`Mês Selecionado ${mes}, esse mês tem ${dias} dias.`);
    break;
  case "8":
    mes = "Agosto";
    dias = "31";
    console.log(`Mês Selecionado ${mes}, esse mês tem ${dias} dias.`);
    break;
  case "9":
    mes = "Setembro";
    dias = "30";
    console.log(`Mês Selecionado ${mes}, esse mês tem ${dias} dias.`);
    break;
  case "10":
    mes = "Outubro";
    dias = "31";
    console.log(`Mês Selecionado ${mes}, esse mês tem ${dias} dias.`);
    break;
  case "11":
    mes = "Novembro";
    dias = "30";
    console.log(`Mês Selecionado ${mes}, esse mês tem ${dias} dias.`);
    break;
  case "12":
    mes = "Dezembro";
    dias = "31";
    console.log(`Mês Selecionado ${mes}, esse mês tem ${dias} dias.`);
    break;

  default:
    console.log(
      `Precia ser um numero entre 1 ou 12, referente ao mês desejado, tente novamente`
    );
}

// ___________________________________________________________________________

// Questão 2(switch case):
// exercicio de : Uso de tarifa de energia.
// sistema em desenvolvimento para calcular contas de energia eletrica e a tarifa será calculada com base no consumo mensal de energia e tipo de consumidor.

// regras:
// Tipo de consumidor:
// ( residencial ) - fixa de 50 centavos por KW/h
// ( comercial ) - fixa de 40 centavos por KWh mais 10% de desconto caso tenha um consumo supiror há a 1000 KW/h

// ( industrial ) - fixa de 70 centavos por KWh e acrescimento de 5% caso o consumo seja baixo de 800 KW/h

// retornar: Somente o valor da conta ! em reais e centavos para o tipo de consumidor,
// Segundo returno :tipo de consumidor invalido
// ___________________________________________________________________________

const consumidor = "rural";
const consumo = "300";

let desconto;
let acrescimo;
let valorTotal;

switch (consumidor) {
  case "residencial":
    valorTotal = 0.5 * consumo;
    console.log(`Valor da conta: ${valorTotal} tipo de cliente: ${consumidor}`);
    break;
  case "comercial":
    if (consumo > 1000) {
      valorTotal = 0.4 * consumo * 0.9;
      console.log(
        `Valor da conta: ${valorTotal} tipo de cliente: ${consumidor}`
      );
    } else {
      valorTotal = 0.4 * consumo;
      console.log(
        `Valor da conta: ${valorTotal} tipo de cliente: ${consumidor}`
      );
    }
    break;
  case "industrial":
    if (consumo < 800) {
      valorTotal = 0.7 * consumo * 1.05;
      console.log(
        `Valor da conta: ${valorTotal} tipo de cliente: ${consumidor}`
      );
    } else {
      valorTotal = 0.7 * consumo;
      console.log(
        `Valor da conta: ${valorTotal} tipo de cliente: ${consumidor}`
      );
    }
    break;

  default:
    console.log(
      "Tipo de consumidor invalido, selecione 'residencial, comercial e industrial'"
    );
}

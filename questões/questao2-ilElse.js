/*
Sistema para bonificação anual, e assim essa bonificação é baseada no tempo de empresa
tambem no cargo e em performace.

regras:

Tempo de Servico: - 1 ano não tem bonificação, 1 a 3 anos 5% do salario anual, mais de 3 anos 10% do salario anual.
cargo: - gerente ( adicional de bonificação de 20% sobre o valor que ja foi calculado do tempo de serviço)
        analista ( == 10%)

performace: se performace for classificada como excelente recebe bonificação adicional de 15% encima de TUDO.
            se for Boa , 5% encima de TUDO


*/

const cargo = "analista";
const performance = "boa";
const tempo = 10;
const salario = 0;
const ano = 12;

let valorTotal;
let performanceAd;
let cargoRemuneracao;
let salarioAnual;

if (
  (tempo <= 12 && tempo >= 0) ||
  (cargo != "gerente" && cargo != "analista")
) {
  if (cargo != "gerente" && cargo != "analista") {
    console.log(
      `Cargo: ${cargo} não está valido, tente entre: gerente e analista`
    );
  } else if (tempo <= 12 && tempo >= 0) {
    console.log(
      `tempo: ${tempo} não está valido para o bonus. tempo necessario minimo 12 meses`
    );
  }
} else if (tempo <= -1) {
  console.log(
    "Desculpa tempo estipulado invalido, tente novamente algo acima ou igual a 0 meses"
  );
} else if (tempo >= 12 && tempo <= 36) {
  switch (cargo) {
    case "gerente":
      cargoRemuneracao = 1.2;

      if (salario <= 0) {
        console.log("Estagiaro, é pai ?");
      } else if (performance == "excelente") {
        performanceAd = 1.15;
        valorTotal = salario * ano * 0.05 * cargoRemuneracao * performanceAd;
        console.log(`O valor Total dos bonus é: ${valorTotal}`);
      } else if (performance == "boa") {
        performanceAd = 1.05;
        valorTotal = salario * ano * 0.05 * cargoRemuneracao * performanceAd;
        console.log(`O valor Total dos bonus é: ${valorTotal}`);
      } else if (performance != "excelente" && performance != "boa") {
        console.log("Coloque uma performance entre: excelente e boa");
      }
      break;

    case "analista":
      cargoRemuneracao = 1.1;

      if (salario <= 0) {
        console.log("Estagiaro, é pai ?");
      } else if (performance == "excelente") {
        performanceAd = 1.15;
        valorTotal = salario * ano * 0.05 * cargoRemuneracao * performanceAd;
        console.log(`O valor Total dos bonus é: ${valorTotal}`);
      } else if (performance == "boa") {
        performanceAd = 1.05;
        valorTotal = salario * ano * 0.05 * cargoRemuneracao * performanceAd;
        console.log(`O valor Total dos bonus é: ${valorTotal}`);
      } else {
        console.log("Coloque uma performance entre: excelente e boa");
      }
      break;
  }
} else if (tempo > 36) {
  switch (cargo) {
    case "gerente":
      cargoRemuneracao = 1.2;
      if (salario <= 0) {
        console.log("Estagiaro, é pai ?");
      } else if (performance == "excelente") {
        performanceAd = 1.15;
        valorTotal = salario * ano * 0.1 * cargoRemuneracao * performanceAd;
        console.log(`O valor Total dos bonus é: ${valorTotal}`);
      } else if (performance == "boa") {
        performanceAd = 1.05;
        valorTotal = salario * ano * 0.1 * cargoRemuneracao * performanceAd;
        console.log(`O valor Total dos bonus é: ${valorTotal}`);
      } else {
        console.log("Coloque uma performance entre: excelente e boa");
      }
      break;
    case "analista":
      cargoRemuneracao = 1.1;

      if (salario <= 0) {
        console.log("Estagiaro, é pai ?");
      } else if (performance == "excelente") {
        performanceAd = 1.15;
        valorTotal = salario * ano * 0.1 * cargoRemuneracao * performanceAd;
        console.log(`O valor Total dos bonus é: ${valorTotal}`);
      } else if (performance == "boa") {
        performanceAd = 1.05;
        valorTotal = salario * ano * 0.1 * cargoRemuneracao * performanceAd;
        console.log(`O valor Total dos bonus é: ${valorTotal}`);
      } else {
        console.log("Coloque uma performance entre: excelente e boa");
      }
      break;
  }
}

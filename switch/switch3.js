// Crie um programa que permite ao usuário escolher entre pedra, papel ou tesoura.
// Use a instrução switch para determinar o resultado do jogo contra uma escolha do computador.

const pessoa = "papel";
const computador = "tesoura";

switch (pessoa) {
  case "pedra":
    if (computador == "tesoura") {
      console.log("Você venceu =D");
    } else if (computador == "papel") {
      console.log("Você perdeu =(");
    } else {
      console.log("Empate. Tente novamente ! >:/");
    }
    break;
  case "papel":
    if (computador == "pedra") {
      console.log("Você venceu =D");
    } else if (computador == "tesoura") {
      console.log("Você perdeu =(");
    } else {
      console.log("Empate. Tente novamente ! >:/");
    }
    break;
  case "tesoura":
    if (computador == "papel") {
      console.log("Você venceu =D");
    } else if (computador == "pedra") {
      console.log("Você perdeu =(");
    } else {
      console.log("Empate. Tente novamente ! >:/");
    }
    break;
  default:
    console.log("escolha uma opção valida");
    break;
}

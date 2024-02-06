// Escreva um programa em JavaScript que recebe a idade e a renda mensal de uma pessoa como entrada e determina se ela é elegível para um empréstimo bancário.
//  As condições para elegibilidade são:

// A pessoa deve ter pelo menos 21 anos de idade.
// A renda mensal deve ser maior que R$ 3000,00.
// Se a pessoa atender a ambos os critérios, exiba "Você é elegível para o empréstimo", caso contrário, exiba "Você não é elegível para o empréstimo".

const idade = 18;
const rendaMensal = 21000;

if (idade < 18) {
  console.log("Você é menor de idade não pode pegar empréstimo");
} else if (rendaMensal < 3000) {
  console.log(
    "sua renda mensal é de:",
    rendaMensal,
    ". Renda mensal invalida para empréstimo"
  );
} else {
  console.log("Você é elegível para o empréstimo");
}

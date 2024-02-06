// Crie um programa em JavaScript que recebe o código de um produto como entrada e determina sua categoria com base neste código.
//  No entanto, agora existem cinco categorias possíveis: 'A', 'B', 'C', 'D' e 'E'. Utilize um switch para comparar o código do produto e exibir a categoria correspondente.
//   Por exemplo, se o código for 'A', exiba "Eletrônicos", se for 'B', exiba "Roupas", e assim por diante. Se o código não corresponder a nenhuma categoria conhecida,
//    exiba "Código inválido".

// Estas questões são mais desafiadoras e testarão seu conhecimento mais aprofundado sobre o uso de if, for e switch em JavaScript. Boa sorte!

const codigo = "B";

switch (codigo) {
  case "A":
    console.log("Eletronicos");
    break;
  case "B":
    console.log("Roupas");
    break;
  case "C":
    console.log("Móveis");
    break;
  case "D":
    console.log("Comida");
    break;
  case "E":
    console.log("Computador");
    break;

  default: {
    console.log("Codigo invalido");
  }
}

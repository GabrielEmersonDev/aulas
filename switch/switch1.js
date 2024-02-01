//Faça um programa que pede ao usuário inserir o código de um produto (por exemplo, 1 para eletrônicos, 2 para roupas, 3 para alimentos).
//Use a instrução switch para exibir a categoria correspondente ao código.

const codigo = "2";
let produto;

switch (codigo) {
  case "1":
    produto = "Eletronicos";
    console.log(`Produto selecionado: ${produto} `);
    break;
  case "2":
    produto = "Roupas";
    console.log(`Produto Selecionado: ${produto}`);
    break;

  case "3":
    produto = "alimentos";
    console.log(`Produto Selecionado: ${produto}`);
    break;

  default:
    console.log(`Codigo invalido, tente novamente tentando opções 1, 2 ou 3`);
}

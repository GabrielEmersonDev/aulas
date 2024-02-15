// Imagine que você está construindo um sistema de carrinho de compras online. V
// você recebe o preço original de um produto e a categoria do cliente (regular ou VIP).
// Implemente uma expressão ternária para calcular o desconto com base nas seguintes regras:

// Se o cliente for VIP, o desconto é de 20%.
// Se o cliente for regular, o desconto é de 10%.
// Se o cliente não fornecer uma categoria válida, o desconto é de 5%.
// Escreva o código JavaScript para calcular o preço final após o desconto e exiba-o no console.

const preco = 1000;
const client = "Regular";
const desconto =
  client === "Vip"
    ? preco * 0.2
    : client === "Regular"
    ? preco * 0.1
    : preco * 0.05;

const precoFinal = preco - desconto;
console.log(precoFinal);

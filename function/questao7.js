// Escreva uma função chamada inverterString que recebe uma string como parâmetro e retorna a mesma string,
//  mas com os caracteres invertidos. Por exemplo, se a entrada for "hello", a saída deve ser "olleh".

const string = "Gabriel";

function inverterString(string) {
  let reverso = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverso += string[i];
  }
  return reverso;
}

const birulinha = inverterString(string);
console.log(birulinha);

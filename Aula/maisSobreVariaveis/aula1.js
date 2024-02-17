const verdadeira = true;

// Let tem escopo de bloco {... bloco}

// let nome = "luiz";
// var nome2 = "luiz";

// var nome2 = "Claudio"; // Redeclarada

// if (verdadeira) {
//   let nome = "otavio";
//   console.log(nome, nome2);

//   if (verdadeira) {
//     let nome = "outra coisa";
//     console.log(nome, nome2);
//   }
// }

// A função puxa primeiro a variavel/let/const no bloco e depois tenta aumentar o alcance
// para achar onde ela foi declarada

function falaOi() {
  var nome = "Luiz";
  console.log(nome);
}
falaOi();

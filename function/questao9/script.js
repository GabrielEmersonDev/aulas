// criar formulario com :
// Objeto { Nome: nome,
// Sobrenome : Sobrenome,
// Peso: peso,
// Altura: altura,
// }

let id = 1;

function meuEscopo() {
  const form = document.querySelector(".form"); //form (nome da tag) ou .form (nome da classe) #form (id)

  //   form.onsubmit = function (evento) {
  //     evento.preventDefault();
  //     alert(1);
  //     console.log("Foi enviado");
  //   };

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    console.log(nome.value, sobrenome.value, peso.value, altura.value);
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();

//IIFE Immediately Invoked Function Expression

// (function () {
//   alert("Formulario, poderia preencher por favor ?");
// })();

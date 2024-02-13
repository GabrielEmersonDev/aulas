// criar formulario com :
// Objeto { Nome: nome,
// Sobrenome : Sobrenome,
// Peso: peso,
// Altura: altura,
// }

function meuEscopo() {
  const form = document.querySelector(".form"); //form (nome da tag) ou .form (nome da classe) #form (id)
  const resultado = document.querySelector(".resultado");

  const pessoas = [];
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

    const pessoa = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    };

    pessoas.push(pessoa);
    console.log(nome.value, sobrenome.value, peso.value, altura.value);

    console.log(pessoas);

    resultado.innerHTML +=
      `<p> ${nome.value} ${sobrenome.value} ` +
      ` ${peso.value} ${altura.value}</p>`;
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();

//IIFE Immediately Invoked Function Expression

// (function () {
//   alert("Formulario, poderia preencher por favor ?");
// })();

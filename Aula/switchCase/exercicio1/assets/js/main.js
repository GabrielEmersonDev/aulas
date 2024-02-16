// const h1 = document.querySelector(".container h1");

// function zeroAEsquerda(num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function nomeDiaSemana(diaSemana) {
//   const dias = [
//     "Domingo",
//     "Segunda-feira",
//     "Terça-feira",
//     "Quarta-feira",
//     "Quinta-feira",
//     "Sexta-feira",
//     "Sábado",
//   ];
//   if (diaSemana >= 0 && diaSemana <= 6) {
//     return dias[diaSemana];
//   } else {
//     return "Dia Inválido, O número do mês deve estar no intervalo de 0 a 6.";
//   }
// }

// function nomeMes(mes) {
//   const meses = [
//     "Janeiro",
//     "Fevereiro",
//     "Março",
//     "Abril",
//     "Maio",
//     "Junho",
//     "Julho",
//     "Agosto",
//     "Setembro",
//     "Outubro",
//     "Novembro",
//     "Dezembro",
//   ];
//   if (mes >= 0 && mes <= 11) {
//     return meses[mes];
//   } else {
//     return "Mês Inválido, O número do mês deve estar no intervalo de 0 a 11.";
//   }
// }

// function formataData(data) {
//   const diaSemana = nomeDiaSemana(data.getDay());
//   const dia = zeroAEsquerda(data.getDate());
//   const mes = nomeMes(data.getMonth());
//   const ano = data.getFullYear();
//   const hora = zeroAEsquerda(data.getHours());
//   const min = zeroAEsquerda(data.getMinutes());

//   return `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min}`;
// }

const data = new Date();
const dataFormatada = formataData(data);

h1.innerHTML = dataFormatada;

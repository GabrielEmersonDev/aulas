function getNomeMes(mes) {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  if (mes >= 0 && mes <= 11) {
    return meses[mes];
  } else {
    return "Mês Inválido, O número do mês deve estar no intervalo de 0 a 11.";
  }
}

const mesDoAno = getNomeMes(12);
console.log(mesDoAno);

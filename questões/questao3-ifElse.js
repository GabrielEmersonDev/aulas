/*

sistema de pontuação de competição esportiva, no final da competição.

essa pontuação é baseada em performance, penalidades, bonus por recordes e ajustes
categoria de peso.

regras:

performance: pontuação base calculada por tempo ou distancia do atleta

Exemplo: tempo em segundos ou distancia em metros
para eventos de tempo menor é melhor

Pontuação = 1000 - (tempo * 10)

para eventos de distancia maior é o melhor

pontuação = (distancia do atletla * 10 ) 

regra da penalidade: cada penalidade que ele recebe reduz a pontuação total em 5%
se algum recorde for quebrado a pontuação base aumenta em 20% ( numero ja calculado da primeira regra)


categoria de peso :

atletas de categoria de pesos mais leve recebem bonus de 10% sobre a pontuação final
atletas de categoria de pessos mais pesados recebem bonus de 5% sobre a pontuação final

pontuação final é calculada aplicando penalidade e bonus da pontuação base ( base é o calculo apos a performance)

*/

let pontuacao = 500;
let performance = 0;
let perfPosPenRec = 0;
let categoria = "distancia";
let distancia = 1;
let tempo = 0;
let peso = "leve";
let recordesQuebrados = 0;
let penalidades = 0;
let perfPosRec = 0;

function calPerformanceRecordes(a, b) {
  perfPosRec = a + (a * (b * 1.2) - a * b);
  console.log(
    "Resultado de pontos apos calculo de recores:",
    perfPosRec,
    "pontos"
  );
  return;
}

function calPerformancePenalidades(a, b, c) {
  perfPosPen = (a - b * (a - a * 0.95)) * c;
  console.log(
    "Resultado de pontos apos calculo de penalidades e adição do bonus de peso:",
    perfPosPen.toFixed(2),
    "pontos"
  );
  return;
}

switch (categoria) {
  case "tempo":
    if (tempo <= 0) {
      console.log("tempo invalido:", tempo, ". tente um tempo de 1 para cima");
    } else if (pontuacao < 0) {
      console.log(
        "Pontuação invalida:",
        pontuacao,
        ". tente uma pontuação de 0 para cima"
      );
    } else if (peso != "leve" && peso != "pesado") {
      console.log(
        "Peso invalido:",
        peso,
        ". tente um peso valido entre: leve e pesado"
      );
    } else if (penalidades < 0) {
      console.log(
        "penalidades invalida:",
        penalidades,
        ". tente um valor positivo ou igual a 0"
      );
    } else if (recordesQuebrados < 0) {
      console.log(
        "recordes invalidos:",
        recordesQuebrados,
        ". tente um valor positivo ou igual a 0"
      );
    } else if (peso == "leve") {
      pontuacao = 1000;
      performance = pontuacao - tempo * 10;
      console.log("Performance: ", performance);
      calPerformanceRecordes(performance, recordesQuebrados);
      calPerformancePenalidades(perfPosRec, penalidades, 1.05);
    } else if (peso == "pesado") {
      pontuacao = 1000;
      performance = pontuacao - tempo * 10;
      console.log("Performance: ", performance);
      calPerformanceRecordes(performance, recordesQuebrados);
      calPerformancePenalidades(perfPosRec, penalidades, 1.1);
    }

    break;

  case "distancia":
    if (distancia <= 0) {
      console.log(
        "distancia invalido:",
        distancia,
        ". tente uma distancia de 1 para cima"
      );
    } else if (pontuacao < 0) {
      console.log(
        "Pontuação invalida:",
        pontuacao,
        ". tente uma pontuação de 0 para cima"
      );
    } else if (peso != "leve" && peso != "pesado") {
      console.log(
        "Peso invalido:",
        peso,
        ". tente um peso valido entre: leve e pesado"
      );
    } else if (penalidades < 0) {
      console.log(
        "penalidades invalida:",
        penalidades,
        ". tente um valor positivo ou igual a 0"
      );
    } else if (recordesQuebrados < 0) {
      console.log(
        "recordes invalidos:",
        recordesQuebrados,
        ". tente um valor positivo ou igual a 0"
      );
    } else if (peso == "leve") {
      performance = pontuacao + distancia * 10;
      console.log("Performance: ", performance);
      calPerformanceRecordes(performance, recordesQuebrados);
      calPerformancePenalidades(perfPosRec, penalidades, 1.05);
    } else if (peso == "pesado") {
      performance = pontuacao + distancia * 10;
      console.log("Performance: ", performance);
      calPerformanceRecordes(performance, recordesQuebrados);
      calPerformancePenalidades(perfPosRec, penalidades, 1.1);
    }
    break;

  default:
    console.log(
      "Categoria invalida:",
      categoria,
      ". Tente uma valida: tempo ou distancia "
    );
    break;
}

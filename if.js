// Você esta desenvolvendo sistema de controle de acesso.
// Regras: Horario de acesso, os pesquisadores podem acessar o lab das 08 da manha até as 08 da noite durante os dias uteis.
// regras: os estudantes so podem acessar oo lab das 10 as 18 tambem durante dias uteis
// regra: supervisores tem acesso a qualquer hora e qualquer dia, final de semana so supervisor entra


//capacidade maxima de 5 pessoas no laboratorio.
//
// limite de pessoas atingido FEITO
// acesso permitido: supevisor FEITO
// acesso negado : acesso permidito apenas para supervisor nos finais de semana FEITO
// acesso permitido: pesquisador dentro do horario feito
// acesso permitido: estudante dentro do horario feito
// acesso negado: Fora do horario permitido feito

const cargo = "estudante";
const pessoas = 4;
const hora = 19;
const dia = 5;



if ( pessoas >= 5 ) {
    console.log('Limite de pessoas atingido');
} else if ( cargo !== "supervisor" && dia >= 6) {
    console.log('acesso negado: finais de semana somente para supervisores');
} else if (pessoas <= 4 && cargo === "supervisor" ) {
    console.log('Acesso permitido: supervisor');
} else if ( cargo === "pesquisador" && dia >= 6 ) {
    console.log('Acesso negado: fora do horario permitido');
} else if ( cargo === "pesquisador" && (hora < 8 || hora > 20 )) {
    console.log('Acesso negado: fora do horario permitido');
} else if ( cargo === "pesquisador" && (hora < 8 || hora < 20)) {
    console.log('Acesso permitido: pesquisador dentro do horario ');
} else if ( cargo === "estudante" && dia >= 6) {
    console.log('Acesso negado: fora do horario permitido');
} else if ( cargo === "estudante" && (hora < 8 || hora > 18 )) {
    console.log('Acesso negado: fora do horario permitido');
} else if ( cargo === "estudante" && dia <= 5 && (hora >= 8 ||hora <= 18) ) {
    console.log('Acesso permitido: estudante dentro do horario'); }


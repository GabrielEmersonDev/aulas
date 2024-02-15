/*
Operadores lógicos
&& -> AND -> e
|| -> OR -> OU
! -> NOT -> Não
*/

// const expressaoAnd = true && true && true;
// const expressaoOr = true || false;
// const expressaoNot = !true;
// console.log(expressaoAnd);
// console.log(expressaoOr);
// console.log(expressaoNot);

// const usuario = "Luiz";
// const senha = "123456";

// const vaiLogar = usuario === "Luiz" && senha === "123456";
// console.log(vaiLogar);

// console.log(!true);

// console.log("Gabriel Otávio" && true && "Maria");
/*
FALSY:
 false
0
'',"",``
null /undefined
NaN
*/

// console.log("luiz" && "" && "Maria");

// function falaOi() {
//   return "Oi";
// }

// const vaiExecutar = "Joãozinho";

// console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || "Cleiton jose" || true);

const a = 0;
const b = null;
const c = "false"; // Está sendo exibido no console.log
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

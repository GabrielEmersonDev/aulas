// Questão(If else)

// Algoritmo de calculo de PLR ( participação nos Lucros) .
// Contexto:
// desenvolvendo sistema para calcular o bonus de vendas para funcionarios de uma loja.
// Esse bonus é calculado com base no total de vendas e tempo de experiencia desse funcionario.
// Regras:
//  Experiencia: 2 tipos de funcionarios 
// ( iniciante - de 2anos de experiencia)
// (Experiente - 2 anos de experiencia ou mais)
// Calculo do bonus:

// ( iniciante - vendas até 1000 reais bonus de 3% sobre a venda)
// ( iniciante - venda acima de 1000 bonus de 5% )
// (experiente - bonus fixo 10% )

// Valor do bonus e parebenização
// ___________________________________________________________________________

const funcionario = "experiente";
const vendas = 1001;
let valorBonus
let bonus

if ( funcionario == "experiente" ) {
    bonus = 10
    valorBonus = vendas + ((vendas * bonus) / 100 )
    console.log(`Valor do bonus: ${valorBonus}, Parabens funcionario ${funcionario}`)
} else if ( funcionario == "iniciante" && vendas > 1000) {
    bonus = 5
    valorBonus = vendas + ((vendas * bonus) / 100 )
    console.log(`Valor do bonus: ${valorBonus}, Parabens funcionario ${funcionario}`)
}  else if (funcionario == "iniciante" && vendas <= 1000 ) {
    bonus = 3
    valorBonus = vendas + ((vendas * bonus) / 100 )
    console.log(`Valor do bonus: ${valorBonus}, Parabens funcionario ${funcionario}`)
} else {
    console.log("Inseria um tempo de experiencia correto ao proposto")
}
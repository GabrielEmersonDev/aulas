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
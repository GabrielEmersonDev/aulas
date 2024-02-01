// Solicite o peso e a altura do usuário.
// Calcule o IMC usando a fórmula: IMC = peso / (altura * altura).
// Use if para categorizar o resultado em "Abaixo do peso", "Normal", "Sobrepeso" ou "Obeso".
// Exiba o IMC e a categoria correspondente.

const peso = 86.42;
const altura = 163.23;

const imc = peso / ((altura / 100) * (altura / 100));


if (imc >= 40.0) {
    console.log(`Obesidade Grave, Grau 3 e Risco de doenças Muitíssimo elevado, ${imc}`);
} else if (imc >= 35.0 && imc <= 39.9) {
    console.log(`Obesidade, Grau 2 e Risco de doenças Muito elevado, ${imc}`);
} else if (imc >= 30 && imc <= 34.9) {
    console.log(`Obesidade, Grau 1 e Risco de doenças elevado, ${imc}`);
} else if (imc >= 25 && imc <= 29.9) {
    console.log(`Sobrepeso, Grau 0 e Risco de doenças pouco elevado, ${imc}`);
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log(`Normal, Grau 0 e Risco de doenças normal, ${imc}`);
} else if (imc < 18.5) {
    console.log(`Magro ou abaixo, Grau 0 e Risco de doenças elevado, ${imc}`);
}

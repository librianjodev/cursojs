/* Exercício
 * -----------------------------------------------------------
 * Exibir nome, idade, peso, altura e IMC de uma pessoa,
 * usando variáveis e operações matemáticas. (Desafio Extra)
 * Em seguida, exibir em que classificação está a pessoa,
 * de acordo com o IMC:
 * ----------------------------------------------------------
 * < 16	Magreza grau III
 * 16.0 - 16.9	Magreza grau II
 * 17.0 - 18.4	Magreza grau I
 * 18.5 - 24.9	Adequado
 * 25.0 - 29.9	Pré-obeso
 * 30.0 - 34.9	Obesidade grau I
 * 35.0 - 39.9	Obesidade grau II
 * >= 40    	Obesidade grau III
 * --------------------------------
 */

// Armazenando o nome e sobrenome em constantes, já que nunca mudam:
const nome = "Paulo Vítor";
const sobrenome = "Medeiros";

// Armazenando os demais dados em variáveis, já que podem sofrer alteração:
let idade = 22;
let peso = 75;
let altura = 1.75;

// Calculando o IMC e armazenando numa variável:
let imc;
imc = peso / (altura ^ 2);

console.log(nome + " " + sobrenome + " tem " + idade + " anos, pesa " + peso + " kg, tem " + altura + "m de altura e seu IMC é " + imc + ".");

// Exibindo a classificação de acordo com IMC:

if (imc < 16) {
    console.log("Nível de IMC: Magreza grau III");
} else if (imc >= 16 || imc <= 16.9) {
    console.log("Nível de IMC: Magreza grau II");
} else if (imc >= 17 || imc <= 18.4) {
    console.log("Nível de IMC: Magreza grau I");
} else if (imc >= 18.5 || imc <= 24.9) {
    console.log("Nível de IMC: Adequado");
} else if (imc >= 25 || imc <= 29.9) {
    console.log("Nível de IMC: Pré-obeso");
} else if (imc >= 30 || imc <= 34.9) {
    console.log("Nível de IMC: Obesidade grau I");
} else if (imc >= 35 || imc <= 39.9) {
    console.log("Nível de IMC: Obesidade grau II");
} else if (imc >= 40) {
    console.log("Nível de IMC: Obesidade grau III");
} else {
    console.log("Erro. Tente novamente depois.");
}

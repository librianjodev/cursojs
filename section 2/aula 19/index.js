// Tipos de dados Primitivos

// String - Armazena dados de Texto. Declaramos uma String das seguintes formas:
const nome1 = 'Paulo'; // Usando apóstrofo.
const nome2 = "Paulo"; // Usando aspas duplas.
const nome3 = `Paulo`; // Usando template Strings.

// Number - Armazena dados numéricos com ou sem ponto flutuante. Declaramos um Number das seguintes formas:
const num1 = 10; // Número natural
const num2 = -10; // Número inteiro negativo
const num3 = 10.52; // Número real com ponto flutuante

// Undefined - Valores não declarados e que não possuem endereço na memória (valor) - Não pode ser const!
let semNome;

// Null - Também pra nenhum lugar na memória, mas é diferente de undefined. Geralmente usado propositalmente pra atribuir valor nulo (inexistente) a uma variável.
let nomeInvalido = null;

// Boolean - Variável lógica que só pode receber um de dois valores: true ou false
const aprovado = true;

// Pra descobrir o tipo de uma variável, usamos "typeof":
console.log(typeof aprovado, aprovado); // Exibindo o tipo da variável e seu valor


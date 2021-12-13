// Constantes em JavaScript

/* Constantes são utilizadas para guardar informações que
 * não podem ser alteradas. Essas informações podem ser de
 * diferentes tipos, como textos ou números.
* -----------------------------------------------------------------
 * Em JavaScript, podemos criamos Constantes da seguinte forma:
 */

const nome = 'João'; // Criando e inicializando a constante

console.log(nome);

/* Usamos const para informar que estamos criando uma constante.
 * Logo em seguida atribuimos um rótulo a ela, nesse caso é
 * 'nome', e atribuímos um valor para ela: nesse caso, a string 'João'.
 * -----------------------------------------------------------------
 * Não podemos declarar variáveis sem inicializar (atribuir
 * um valor)!
 */

/* Podemos utilizar constantes normalmente para realizar operações,
 * como por exemplo:
 */

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);

/* Porém, o valor das constantes não pode ser alterado, como acontece
 * com as variáveis!
 */

/* ---------------------------------------------------------------------
 * Detalhes Importantes:
 * 1. Duas constantes não podem ter o mesmo nome.
 * 2. Não colocar espaço, acentuação e nem caracteres especiais no nome
 * da constantes. (Com exceção de underline "_".)
 * 3. Não podemos criar constantes com palavras reservadas.
 * Exemplo: let, console, if, entre outros não podem ser nome de
 * constantes!
 * 4. Atribua nomes significativos às constantes pra facilitar a
 * leitura do código!
 * 5. Nome das constantes não pode iniciar com número!
 * Exemplo: 1nome, 8idade. Não funcionará e dará erro!
 * 6. Nome de constantes são Case-sensitive. 
 * Exemplo: nome é diferente de Nome.
 * ---------------------------------------------------------------------
 */
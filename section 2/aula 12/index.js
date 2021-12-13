console.log('Esta mensagem está sendo enviada de dentro do arquivo index.js, conectado ao HTML através da tag Script. Esta é uma boa prática!');

/* A função alert() serve pra exibir um pop-up de mensagem na página web.
 * Os alertas só funcionam no navegador web e não são exibidos pelo console do Node.JS.
 * Exemplo:
 */

alert('Esta é a mensagem 1: \n Eu sou um alert();');

// Os alertas não se sobrepõem, ou seja, um alerta só pode ser exibido após o anterior ter sido dispensado. Exemplo:

alert('Esta é a mensagem 2: \n Eu só sou exibida após a mensagem 1 ter sido fechada.');
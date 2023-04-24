import entradaDados from 'readline-sync';

const nome = entradaDados.question('Digite o seu nome: ');
const idade = entradaDados.questionInt('Digite a idade: ');

console.log(`Seu nome é ${nome}! \n Você tem ${idade} anos!`);
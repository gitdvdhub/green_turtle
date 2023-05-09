import readline from 'readline-sync';

console.log('Aplicação de juros: \n');
let valorDevido = Number(readline.question('Informe o valor devido: '));
let dias = Number(readline.question('Informe quantos dias se passaram desde o vencimento do boleto: '));

if (valorDevido > 0) {
    const juros = (dias <= 0) ? 0 : ((dias > 15) ? 0.10 : 0.05);
    const valorTotal = valorDevido + (valorDevido * juros)

    console.log(`Valor original: ${valorDevido}`);
    console.log(`Dias atrasados: ${dias}`);
    console.log(`Taxa de juros: ${juros * 100}%`);
    console.log(`Valor total com juros: ${valorTotal}`);
} else {
    console.log('O valor da dívida deve ser maior que 0!');
}


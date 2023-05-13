import readline from 'readline-sync';

// banco de dados
const salarioMinimoPorAno = [
    {ano: 2010, salario: 510},
    {ano: 2011, salario: 545},
    {ano: 2012, salario: 622},
    {ano: 2013, salario: 678},
    {ano: 2014, salario: 724},
    {ano: 2015, salario: 788},
    {ano: 2016, salario: 880},
    {ano: 2017, salario: 937},
    {ano: 2018, salario: 954},
    {ano: 2019, salario: 998},
    {ano: 2020, salario: 1045}
 ];
 
 const inflacaoIPCAPorAno = [
     {ano: 2010, IPCA: 5.91},
     {ano: 2011, IPCA: 6.50},
     {ano: 2012, IPCA: 5.84},
     {ano: 2013, IPCA: 5.91},
     {ano: 2014, IPCA: 6.41},
     {ano: 2015, IPCA: 10.67},
     {ano: 2016, IPCA: 6.29},
     {ano: 2017, IPCA: 2.95},
     {ano: 2018, IPCA: 3.75},
     {ano: 2019, IPCA: 4.31},
     {ano: 2020, IPCA: 4.52}
 ];


 
// inicializando o programa

console.log(`
Escolha uma das alternativas:

1 - Listar os salários mínimos de 2010 à 2020
2 - Listar o índice de IPCA de 2010 à 2020
3 - Comparação entre o percentual de aumento salarial e o IPCA
`);

let escolha = readline.question(`Digite o número da sua escolha: `);

switch (escolha) {
    case '1':
        listarSalarioMinimo(salarioMinimoPorAno);
        break;
    case '2':
        listarIndiceIPCA(inflacaoIPCAPorAno);
        break;
    case '3':
        comparacaoSalarioIPCA(salarioMinimoPorAno, inflacaoIPCAPorAno);
        break;
    default:
        console.log('Opção inválida!');
}

function listarSalarioMinimo(salarioMinimoEAno = salarioMinimoPorAno) {
    for (let conjunto of salarioMinimoEAno) {
        console.log(`
        Ano: .......... ${conjunto.ano}
        Salario mínimo: ${formatarSalario(conjunto.salario)}
        `
        );
    }
}

function listarIndiceIPCA(IPCA) {
    for (let conjunto of IPCA) {
        console.log(`
        Ano: .......... ${conjunto.ano}
        IPCA: ......... ${formatarIPCA(conjunto.IPCA)}%
        `
            );
    }
}

function comparacaoSalarioIPCA(salarioMinimoEAno, inflacaoIPCA) {

    for (let i = 0; i < salarioMinimoEAno.length; i++) {
        let ano = salarioMinimoEAno[i].ano;
        let salario = salarioMinimoEAno[i].salario;
        let IPCA = inflacaoIPCA[i].IPCA;

        console.log(`
        Ano: .................... ${ano}
        Salario mínimo: ........ ${formatarSalario(salario)}
        Crescimento salarial: ..... ${(ano == 2010) ? "-" : formatarIPCA(calcularCrescimentoSalarial(salarioMinimoEAno, i))}%
        Inflalação IPCA: .......... ${formatarIPCA(IPCA)}%
        `);
    }


}

function calcularCrescimentoSalarial(salarioEAno, indice) {
    let diferenca = salarioEAno[indice].salario - salarioEAno[indice - 1].salario;
    return (diferenca / salarioEAno[indice - 1].salario) * 100;
}

function formatarSalario(salario) {
    return `R$ ${salario.toFixed(2).replace('.', ',')}`;
}

function formatarIPCA(IPCA) {
    return `${IPCA.toFixed(2).replace('.', ',')}%`;
}
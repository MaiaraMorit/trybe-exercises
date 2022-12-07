//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1];.
//Valor esperado no retorno da função: 4.

function MaiorNumero (num) {
    let maior = 0; //ele começa contando do zero, esse daqui é a nossa variável de comparação.
    for(let index in num) {
        if (arrayNumeros[maior] < arrayNumeros[index]) {
            maior = arrayNumeros
        }
    }
    return maior
}
console.log(maior([2, 3, 6, 7, 10, 1]));
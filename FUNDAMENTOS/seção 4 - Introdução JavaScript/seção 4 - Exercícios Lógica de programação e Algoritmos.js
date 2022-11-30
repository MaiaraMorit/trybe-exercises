let word = 'Egge';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
    //reverseWord += word[word.length - 1 - index];
    //or
    reverseWord = word.split('').reverse(). join('')
}
console.log(reverseWord);



function contarCaracteres(string) {
    return string.length
}

function retornarMaiorPalavra(palavra1, palavra2) {
    let carcteresPalavra1 = contarCaracteres(palavra1)
    let caracteresPalavra2 = contarCaracteres(palavra2)
    if (carcteresPalavra1 > caracteresPalavra2) {
        return palavra1
    } else {
        return palavra2
    }
}

// console.log(compararPalavras('doce', 'salgado'))

function retornarMenorPalavra(palavra1, palavra2) {
    let carcteresPalavra1 = contarCaracteres(palavra1)
    let caracteresPalavra2 = contarCaracteres(palavra2)
    if (carcteresPalavra1 < caracteresPalavra2) { //eu poderia colocar apenas palavra1.legth e palavra2.length
        return palavra1
    } else {
        return palavra2
    }
}

function exercicio2() {
    //considere o array já escrito e utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
    let array = ['java','javascript','python','html', 'css'];
    let resultMaior = array[0];
    let resultMenor = array[0]

    for (let index = 0; index < array.length; index += 1) {
        let palavraAtual = array[index];
        let maiorPalavra = retornarMaiorPalavra(resultMaior, palavraAtual)
        let menorPalavra = retornarMenorPalavra(resultMenor, palavraAtual)
        resultMaior = maiorPalavra
        resultMenor = menorPalavra
    }

    console.log('A maior palavra é:', resultMaior);
    console.log('A menor palavra é:', resultMenor);
}
exercicio2()

function exercicio3() {
    //Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

    // fazer uma função reutilizavel pra saber se esse número é primo ou não
    // pega os problemas pequenininhos antes de resolver o problema como um todo
}
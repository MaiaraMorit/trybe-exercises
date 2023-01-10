//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.


// split(''): transformará a string em um array onde cada posição será uma letra da string
// reverse(): fará o array ficar de trás pra frente
//join(''): faz com que todo o array vire uma string novamente.

let palavra1 = 'doce';
let palavra2 = 'egge';

function VerificandoPalíndromo(string) {
    let SeparandoEInvertendo = string.split('').reverse().join('')
    if (string === SeparandoEInvertendo) {
        return true;
    } else {
        return false;
    }
} 
// no true e false acima vc tentou colocar letra maíscula e isso deu erro, atenção nesses detalhes.

console.log(VerificandoPalíndromo(palavra1));
console.log(VerificandoPalíndromo(palavra2));


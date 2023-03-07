/**
 * Exercício 12
 * ------------ 
 * Crie uma função que receba uma palavra e retorne o inverso dela
 * Ex: amor -> roma, casa -> asac, ...
 */

//Modo Preguiça
function invertePalavra(teste) {
    return teste.split('').reverse().join('')
}

//Modo perturbado
function inverteAi(teste){
    let palavraInvertida = '';
    for (let i = teste.length -1; i >=0; i--) {
        palavraInvertida += teste[i]
    }
    return palavraInvertida
}

console.log(invertePalavra('amor') + ' ' + inverteAi('inferno'));
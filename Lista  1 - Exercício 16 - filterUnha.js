/**
 * Exercício 16
 * ------------ 
 * Crie uma função que faça o mesmo que a função filter do JS
 */

function comecaComA(arr){
    let osA = []
    arr.forEach(palavra => {
        palavra.charAt(0).toLowerCase() == 'a' ? osA.push(palavra):'';
    });
    return osA
}

let palavras = ['avião','Detonator','açúcar','jovem']
console.log(comecaComA(palavras));
/**
 * Exercício 11
 * ------------ 
 * Crie uma função que retorne todos os elementos das posições pares de um array
 * Ex: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * Resultado esperado: [2, 4, 6, 8, 10]
 */

function sohPar(arr){
    let arrayPar = [];
    arr.forEach(numero => {
        numero % 2 == 0 ? arrayPar.push(numero) : ''
    });
    return arrayPar
}

console.log(sohPar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
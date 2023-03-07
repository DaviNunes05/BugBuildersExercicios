/**
 * Exercício 13
 * ------------
 * 
 * Dado um array de números
 * [30, 3, 32, 57, 70, 23, 104]
 * 
 * 1. Retorne um array com o dobro dos números do primeiro array.
 *    Resultado Esperado: [60, 6, 64, 114, 140, 46, 208]
 * 
 * 2. Retorne os números pares do array multiplicados por 10
 *    Resultado Esperado: [ 300, 320, 700, 1040 ]
 */

function retornaMonteDeCoisa(arr){
    let dobro = []
    let paresDez = [];
    arr.forEach(numero => {
        dobro.push(numero*2)
        numero%2 == 0 ? paresDez.push(numero*10):'';
    });

    return `Dobro: ${dobro} 
Pares * 10: ${paresDez}`
}

console.log(retornaMonteDeCoisa([30, 3, 32, 57, 70, 23, 104]));
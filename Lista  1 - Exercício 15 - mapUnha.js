/*
 * Exercício 15
 * ------------ 
 * Crie uma função que faça o mesmo que a função map do JS
 */

function duplicaValores(arr) {
    let arrDobrado = [];
    arr.forEach(numero => {
        numero = arrDobrado.push(numero*2)
    });
    return arrDobrado
}

let array = [1,2,3,4];
let arrayDob = duplicaValores(array);
console.log(array);
console.log(arrayDob);
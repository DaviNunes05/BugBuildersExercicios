/**
 * Exercício 10
 * ------------ 
 * Crie uma função chamada maiorElemento que receberá um array de inteiros e
 * deverá retornaro maior número presente nesse array:
 * Ex: [4, 9, 2, 1, 5, 19, 62, 32, 7, 47]
 * Resultado esperado: 62
 */

function maiorElemento(arr){
    let maiorNumero = 0;
    arr.forEach((numero,i) => {
        i == 0 ? maiorNumero = arr[0] : '';
        maiorNumero < numero ? maiorNumero = numero:'';
    });
    return maiorNumero
};


console.log(maiorElemento([4, 9, 2, 1, 5, 19, 62, 32, 7, 47]));
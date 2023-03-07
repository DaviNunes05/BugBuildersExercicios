/**
 * Exercício 8
 * ------------ 
 * Crie uma função chamada contadoraDeAs que receberá um texto ou uma palavra como parametro e
 * deverá retornar quantidade de letras A ou a, seguindo o seguinte padrão de retorno:
 * "Foram encontrado(s) X letras A no texto/palavra informada"
 */

function contadoraDeAs(texto){
    if (typeof(texto) != 'string'){
        return 'Não pode ser um número'
    };
    
    let contador = 0;

    texto.toLowerCase().split('').forEach(letra => {
        letra == 'a' ? contador++ :'';
    });
    return `Foram encontrado(s) ${contador} letras A ou a no texto/palavra informada`
}

console.log(contadoraDeAs('Davi tem uma grande piroca... grandona... pra caralho'));
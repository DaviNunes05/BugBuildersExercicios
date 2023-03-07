/**
 * Exercício 9
 * ------------ 
 * Crie uma função chamada contadoraDeLetra que receberá 2 parametros. Um texto ou uma palavra e uma letra
 * para ser buscada. Com isso deverá retornar quantidade da letra informada, seguindo o seguinte padrão de retorno:
 * "Foram encontrado(s) X letras Y no texto/palavra informada"
 * 
 */

function contadoraDeAs(texto){
    if (typeof(texto) != 'string'){
        return 'Não pode ser um número'
    };
    
    let contador = 0;

    texto.toLocaleLowerCase().split('').forEach(letra => {
        letra == 'a' ? contador++ :'';
    });
    return `Foram encontrado(s) ${contador} letras A ou a no texto/palavra informada`
}

console.log(contadoraDeAs('Davi tem uma grande piroca... grandona... pra caralho'));
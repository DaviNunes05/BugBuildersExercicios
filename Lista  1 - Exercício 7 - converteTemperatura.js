/**
 * Exercício 7
 * ------------ 
 * Crie uma função chamada converteTemperatura que recebe 2 parametros. O primeiro é uma string
 * que deverá ser C ou F, correspondente à escala da temperatura. O segundo parametro será a temperatura em si. 
 * Se receber C deverá converter a temperatura recebida para Celsius.
 * Se receber F deverá converter a temperatura recebida para Farenheit.
 * O retorno deverá seguir o padrão: "Temperatura X da escala XPTO corresponde a temperatura Y na escala XPTY"
 * Fórmula:
 * 1. Celsius para Farenheit: T * 9/5   32 onde T é a temperatura em celsius
 * 2. Farenheit para Celsius: (T - 32) * 5/9 onde T é a temperatura em farenheit
 */

function converteTemperatura(escala,temperatura){
    let tiposDeEscalas = ['Celsius','Farenheit']

    if (typeof(escala) != 'string' || 
        typeof(temperatura) != 'number' || 
        escala.toLowerCase() != 'c' && escala.toLowerCase() != 'f'){
            return "Escala de Temperatura ou Temperatura inválida, digite 'C'(Celsius) ou 'F'(Farenheit), e temperatura deverá ser um número inteiro." 
    };
    
    escala = escala.toLowerCase() == 'c' ? 'Celsius' : 'Farenheit';

    const ehCelsius = escala == 'Celsius';

    return `Temperatura ${temperatura}º da escala ${escala} corresponde a ${parseFloat(ehCelsius ? (temperatura * 9/5) + 32:(temperatura - 32) * 5/9).toFixed(2)}º na escala ${tiposDeEscalas[ehCelsius ? 1 : 0]}.`
};

console.log(converteTemperatura('f',20));
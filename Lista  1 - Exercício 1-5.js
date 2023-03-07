/** 
 * Exercício 1
 * ------------
 * Crie um objeto JS com os seus dados pessoais (pode inventar) que contenham os campos
 * nome
 * sobrenome
 * idade
 * endereço
 * telefone
 * hobbies (coisas que gostam de fazer)
*/

const pessoa = {
    'nome' : 'davi',
    'sobrenome' : 'nunes',
    'idade' : 30,
    'endereco' : 'Tv.46',
    'telefone' : 21968244017,
    'hobbies' : ['lolzinho','academia','animes']
};

/*  
    1. Imprima o campo nome a partir desse objeto.
    2. Imprima o campo telefone a partir desse objeto.
*/
    console.log(`nome: ${pessoa.nome} 
    telefone: ${pessoa.telefone}`);
    
/*
    3. Usando a técnica destructuring capture e imprima nome, idade e endereço desse objeto.
*/
let {nome, idade, endereco} = pessoa //Posso renomear as propriedades desta forma {nome:name} 'name' passsa a representar a propriedade nome
    console.log(nome, idade, endereco);

/* 
    4. Usando a técnica de spread operator, crie um novo objeto a partir do objeto existente adicionando o campo sexo.
*/
let pessoaCompleta = {...pessoa, 'sexo':'diferenciado'};
console.log(pessoaCompleta);


/* 
    5. Usando uma estrutura de repetição, imprima todos os hobbies desse objeto.
*/
pessoa.hobbies.forEach((hobbie, i) => console.log(`hobbie ${i+1} : ${hobbie}`));

/* 
* Exercício 2
* ------------ 
* Crie um array com o nome de jogos que você mais gosta (mínimo de 5)
*/

let jogos = ['Chrono Trigger', 'Sonic', 'League of Legends', 'Final Fantasy VII', 'Blasphemous'];

/* 
* Exercício 3
* ------------ 
* Crie um array de objetos com o nome e uma nota (avaliação) de jogos que você mais gosta (mínimo de 5)
*/

let jogosAvaliados = [{'BattleToads':10},{'kof97':10},{'DarkSouls':7},{'Topgear3000':9},{'Elden Ring':10}];

console.log(jogosAvaliados);

/*
 * Exercício 4,5
 * ------------ 
 * Crie uma função chamada Ola que retorne uma saudação: "Olá mundo!!!"
 * Aproveite a mesma função anterior e altere a mesma para retornar uma saudação personalizada: "Olá <NOME DA PESSOA>!!!"
*/

let saudacao = nome => `Olá ${nome} seu iMundo`;

console.log(saudacao("Davi"));
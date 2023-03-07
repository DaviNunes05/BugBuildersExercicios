# BugBuildersExercicios

Lista 1

/**
 * Exercício 1
 * ------------

 *  * Crie um objeto JS com os seus dados pessoais (pode inventar) que contenham os campos
 * nome
 * sobrenome
 * idade
 * endereço
 * telefone
 * hobbies (coisas que gostam de fazer)
 * 1. Imprima o campo nome a partir desse objeto.
 * 2. Imprima o campo telefone a partir desse objeto.
 * 3. Usando a técnica destructuring capture e imprima nome, idade e endereço desse objeto.
 * 4. Usando a técnica de spread operator, crie um novo objeto a partir do objeto existente adicionando o campo sexo.
 * 5. Usando uma estrutura de repetição, imprima todos os hobbies desse objeto.
 */

/**
 * Exercício 2
 * ------------ 
 * Crie um array com o nome de jogos que você mais gosta (mínimo de 5)
 */

/**
 * Exercício 3
 * ------------ 
 * Crie um array de objetos com o nome e uma nota (avaliação) de jogos que você mais gosta (mínimo de 5)
 */

/**
 * Exercício 4
 * ------------ 
 * Crie uma função chamada Ola que retorne uma saudação: "Olá mundo!!!"
 */

/**
 * Exercício 5
 * ------------ 
 * Aproveite a mesma função anterior e altere a mesma para retornar uma saudação personalizada: "Olá <NOME DA PESSOA>!!!"
 */

/**
 * Exercício 6
 * ------------
 * Crie uma função chamada calculaIdadeDoCao que receba a idade do seu cão e retorne um texto 
 * de acordo com a idade dele em anos humanos, considerando que 1 ano humano corresponde há 7 anos de um cão.
 * exemplo de retorno: "Seu cão tem X anos em anos de cachorro!"
 */

/**
 * Exercício 7
 * ------------ 
 * Crie uma função chamada converteTemperatura que recebe 2 parametros. O primeiro é uma string
 * que deverá ser C ou F, correspondente à escala da temperatura. O segundo parametro será a temperatura em si. 
 * Se receber C deverá converter a temperatura recebida para Celsius.
 * Se receber F deverá converter a temperatura recebida para Farenheit.
 * O retorno deverá seguir o padrão: "Temperatura X da escala XPTO corresponde a temperatura Y na escala XPTY"
 * Fórmula:
 * 1. Celsius para Farenheit: T * 9/5 + 32 onde T é a temperatura em celsius
 * 2. Farenheit para Celsius: (T - 32) * 5/9 onde T é a temperatura em farenheit
== */

/**
 * Exercício 8
 * ------------ 
 * Crie uma função chamada contadoraDeAs que receberá um texto ou uma palavra como parametro e
 * deverá retornar quantidade de letras A ou a, seguindo o seguinte padrão de retorno:
 * "Foram encontrado(s) X letras A no texto/palavra informada"
 */

/**
 * Exercício 9
 * ------------ 
 * Crie uma função chamada contadoraDeLetra que receberá 2 parametros. Um texto ou uma palavra e uma letra
 * para ser buscada. Com isso deverá retornar quantidade da letra informada, seguindo o seguinte padrão de retorno:
 * "Foram encontrado(s) X letras Y no texto/palavra informada"
 * 
 */

/**
 * Exercício 10
 * ------------ 
 * Crie uma função chamada maiorElemento que receberá um array de inteiros e
 * deverá retornaro maior número presente nesse array:
 * Ex: [4, 9, 2, 1, 5, 19, 62, 32, 7, 47]
 * Resultado esperado: 62
 */

/**
 * Exercício 11
 * ------------ 
 * Crie uma função que retorne todos os elementos das posições pares de um array
 * Ex: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * Resultado esperado: [2, 4, 6, 8, 10]
 */

/**
 * Exercício 12
 * ------------ 
 * Crie uma função que receba uma palavra e retorne o inverso dela
 * Ex: amor -> roma, casa -> asac, ...
 */

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


/**
 * Exercício 14
 * ------------
 * 
 * Dado um array de pessoas:
 * [{
        nome: "Jurupinga",
        sobrenome: "Jackson",
        idade: 80
    },
    {
        nome: "Frederico",
        sobrenome: "Mercury",
        idade: 2
    },
    {
        nome: "Brasil",
        sobrenome: "Hilton",
        idade: 5
    },
    {
        nome: "Tiririca",
        sobrenome: "Sangalo",
        idade: 16
    },
    {
        nome: "Bob",
        sobrenome:"Ralley", 
        idade: 100
    }]
 * 
 * 1. Retorne um array com as seguintes condições:
 *          a. "Pode dirigir" se a idade das pessoas for maior ou igual a 18 anos
 *          b. "Não pode dirigir" se a idade das pessoas for menor que 18 anos.
 *    Resultado esperado: ["Pode dirigir", "Não pode dirigir", ...]
 * 
 * 2. Retorne um array contendo uma breve apresentação da pessoa, conforme modelo: "Olá <nome_completo>!!! Você tem <anos_pessoa> anos."
 *    Resultado Esperado: 
 *      [
 *        "Olá Jurupinga Jackson!!! você tem 80 anos.", 
 *        "Olá Frederico Mercury!!! você tem 2 anos.",
 *        ...
 *      ]
 * 
 * 3. Um ano se passou, portanto precisamos retornar um array com as idades das pessoas acrescida em 1.
 *    Resultado esperado: [{
                nome: "Jurupinga",
                sobrenome: "Jackson",
                idade: 81
            },
            {
                nome: "Frederico",
                sobrenome: "Mercury",
                idade: 3
            },
            ...
        ]   
 * 
 * 4. Retorne um array que contenha os nomes das pessoas CAPITALIZED
 *    Retorno esperado: ["JURUPINGA JACKSON", "FREDERICO MERCURY", ...]
 * 
 * 5. Retorne um array de pessoas que contenha o campo nomeCompleto
 *    Retorno esperado: [{
                nome: "Jurupinga",
                sobrenome: "Jackson",
                nomeCompleto: "Jurupinga J

	ackson",
                idade: 81
            },
            {
                nome: "Frederico",
                sobrenome: "Mercury",
                nomeCompleto: "Frederico Mercury",
                idade: 3
            },
            ...
        ]  
 * 
 * 6. Retorne um array que contenha a quantidade de letras do nome e sobrenome de cada pessoa
 *    Retorno esperado: [{
                qtdeNome: 9,       // quantidade de letras do nome Jurupinga
                qtdeSobrenome: 7,  // quantidade de letras do nome Jackson
            },
            {
                qtdeNome: 9,       // quantidade de letras do nome Frederico
                qtdeSobrenome: 7,  // quantidade de letras do nome Mercury
            },
            {
                qtdeNome: 6,       // quantidade de letras do nome Brasil
                qtdeSobrenome: 6,  // quantidade de letras do nome Hilton
            }
            ...
        ]   
 *   
 */

/**
 * Exercício 15
 * ------------ 
 * Crie uma função que faça o mesmo que a função map do JS
 */

/**
 * Exercício 16
 * ------------ 
 * Crie uma função que faça o mesmo que a função filter do JS
 */
 
 Lista 2
 const personagens = [
    {
       "type":"WARRIOR",
       "full_name":"Zezinho Espadeiro",
       "short_name":"Espada dourada",
       "advantage":"+15 de dano ao tomar uma dose de Dreher",
       "duration":"2 minutos",
       "powers":[
          {
             "rarity":"COMMON",
             "name":"Calça de saco de batata",
             "power": "10"
          },
          {
            "rarity":"COMMON",
            "name":"Camisa florida de seda",
            "power": "30"
         },
         {
            "rarity":"UNCOMMON",
            "name":"Cordão de prata com imagem de São Jorge",
            "power": "60"
         },
         {
            "rarity":"RARE",
            "name":"Chinelo Rider",
            "power": "80"
         }
       ],
       "characteristics":[
          {
             "active":true,
             "text":"Se ficar sóbreo reduz a stamina",
          },
          {
             "active":true,
             "text":"É vulnerável à azeitona de bar",
          },
       ]
    },
    {
        "type":"MYSTIQUE",
        "full_name":"João II da mesa redonda",
        "short_name":"Joãozinho mind blow",
        "advantage":"+10 de poder psíquico ao usar camisa da Shiva",
        "duration":"30 segundos",
        "powers":[
           {
              "rarity":"COMMON",
              "name":"Bata dos rolling stones",
              "power": "44"
           },
           {
             "rarity":"RARE",
             "name":"Colar de pedra ametista",
             "power": "87"
          },
          {
             "rarity":"LEGENDARY",
             "name":"Chinelo de tiras de pneu",
             "power": "110"
          },
          {
             "rarity":"RARE",
             "name":"Turbante roxo de cetim",
             "power": "73"
          }
        ],
        "characteristics":[
           {
              "active":true,
              "text":"Cada cm de barba, aumenta a defesa em 2pt",
           },
           {
              "active":true,
              "text":"Ao andar perde a habilidade de ler mentes",
           },
           {
            "active":false,
            "text":"Ao receber dano, chorar que nem um bebê causa pena e sofrimento ao inimigo",
            },
        ]
    },
    {
        "type":"ORC",
        "full_name":"Chu Rek",
        "short_name":"Arrrg",
        "advantage":"+3 de dano ao atacar com meleca",
        "duration":"2 segundos",
        "powers":[
           {
              "rarity":"COMMON",
              "name":"Anel de lata de ervilha",
              "power": "15"
           },
           {
             "rarity":"RARE",
             "name":"Calça de couro surrada",
             "power": "32"
          },
          {
             "rarity":"RARE",
             "name":"Sapato catuca Jesus",
             "power": "79"
          },
          {
             "rarity":"LEGENDARY",
             "name":"Suspensório de rabo de macaco",
             "power": "110"
          }
        ],
        "characteristics":[
           {
              "active":true,
              "text":"Comida enlatada aumenta resistência à dano. 4 de shield por lata",
           },
           {
              "active":false,
              "text":"Ao beber gemada, atira 3 melecas no lugar de uma",
           },
           {
            "active":true,
            "text":"Seu peido cria uma fumaça que atordoa o inimigo",
            },
        ]
    },
    {
        "type":"WARRIOR",
        "full_name":"Paul Laden Tro",
        "short_name":"Paulete",
        "advantage":"+20 de energia elétrica tomar redbull",
        "duration":"60 segundos",
        "powers":[
           {
              "rarity":"RARE",
              "name":"Pack de preservativos sabor tutti-frutti",
              "power": "90"
           },
           {
             "rarity":"LEGENDARY",
             "name":"Cintaralha de metal com espada embutida",
             "power": "100"
          },
          {
             "rarity":"RARE",
             "name":"Chicote de cisal",
             "power": "78"
          },
          {
             "rarity":"COMMON",
             "name":"Vestido do FIUK",
             "power": "5"
          }
        ],
        "characteristics":[
           {
              "active":true,
              "text":"Causa lentidão ao usar lançar preservativo nos inimigos",
           },
           {
              "active":false,
              "text":"Ao tomar redbul, sua espada fica energizada",
           },
           {
            "active":true,
            "text":"Imitar o pablo vittar causa confusão nos inimigos",
            },
        ]
    },
    {
        "type":"MYSTIQUE",
        "full_name":"Tasha Padona",
        "short_name":"Tasha",
        "advantage":"+20 de dano de fogo ao beber marimbondo",
        "duration":"15 segundos",
        "powers":[
           {
              "rarity":"RARE",
              "name":"Garrafa bujudinha de 51",
              "power": "54"
           },
           {
             "rarity":"LEGENDARY",
             "name":"Patinete guidon de piroca",
             "power": "98"
          },
          {
             "rarity":"RARE",
             "name":"Colar de anel de lata de Cintra",
             "power": "82"
          },
          {
            "rarity":"RARE",
            "name":"Isqueiro bic rosa",
            "power": "69"
         },
        ],
        "characteristics":[
           {
              "active":true,
              "text":"Ao arrotar, seu bafo de álcool somado ao seu isqueiro causam explosão",
           },
           {
              "active":false,
              "text":"Se dirigir sóbrea, recebe dano por colisão a cada 20 segundos",
           },
           {
            "active":true,
            "text":"Ao ouvir Reginaldo Rossi, aumenta regeneração em 10%",
            },
        ]
    },
];



/**
 * Exercício 1
 * ------------
 * Crie uma função que retorne o todos os personagens do tipo MYSTIQUE.
 */

/**
 * Exercício 2
 * ------------
 * Crie uma função que retorne o todos os personagens POR um tipo.
 */

/**
 * Exercício 3
 * ------------ 
 * Crie uma função que retorne apenas os personagens que possuam poderes cuja raridade LEGENDARY
 */

/**
 * Exercício 4
 * ------------ 
 * Crie uma função que retorne APENAS os poderes de todos os personages
 */

/**
 * Exercício 5
 * ------------ 
 * Crie uma função que retorne um objeto que contenha uma lista de personagens por tipo
 * Ex: 
 * {
 *  MYSTIQUE: [todos os personagens desse tipo],
 *  WARRIOR: [todos os personagens desse tipo],
 *  ...,
 * }
 */

/**
 * Exercício 6
 * ------------ 
 * Crie umase * }
 */

/**
 * Exercício 7
 * ------------
 * Crie uma função que retorne uma lista de objetos que contenha a soma de todos os poderes de um personagem
 * Ex: 
 * [
 *  {
 *    name: Zezinho Espadeiro,
 *    totalPower: 170,
 *  },
 *  {
 *   ...
 *  }
 * ]
 */

const ingredientes = [
    {
        name: "Ervilha",
        status: "raw",
        isRotten: false,
    },
    {
        name: "Tomate",
        status: "raw",
        isRotten: false,
    },
    {
        name: "Repolho",
        status: "cooked",
        isRotten: true,
    },
    {
        name: "Cenoura",
        status: "raw",
        isRotten: false,
    },
    {
        name: "Carne de perereca",
        status: "cooked",
        isRotten: true,
    },
    {
        name: "Carne de Peru",
        status: "raw",
        isRotten: false,
    },
    {
        name: "Cutelho",
        status: "raw",
        isRotten: false,
    },
    {
        name: "Pentelho defumado",
        status: "raw",
        isRotten: true,
    },
    {
        name: "Tesão de vaca",
        status: "to drink",
        isRotten: false,
    },
    {
        name: "Arroz",
        status: "cooked",
        isRotten: false,
    },
    {
        name: "Ovos",
        status: "raw",
        isRotten: true,
    },
    {
        name: "Pé de galinha",
        status: "raw",
        isRotten: false,
    },
    {
        name: "Molho de tomate enlatado",
        status: "raw",
        isRotten: false,
    },
    {
        name: "Urina de Dragão",
        status: "to drink",
        isRotten: true,
    },
    {
        name: "Vômito de porco",
        status: "to drink",
        isRotten: false,
    },
    {
        name: "Chá de miápica",
        status: "to drink",
        isRotten: false,
    }
]

/**
 * Exercício 8
 * ------------
 * Crie uma função que retorne todos os ingredientes crus(raw) que não estejam podres(rotten)
 */

/**
 * Exercício 9
 * ------------
 * Crie uma função que retorne um objeto contendo os ingredientes bons e ruins
 * Ex:
 *  {
 *    good: [todos os ingredientes bons],
 *    rottens: [todos os ingredientes podres]
 *  }
 */

/**
 * Exercício 10
 * ------------
 * Crie uma função que retorne um objeto contendo os ingredientes que usaremos no ensopado(stew) e também os que serão usados como acompanhamento.
 * Condições:
 *  1. Ingredientes podres serão descartados
 *  2. Ingredientes cozidos(cooked) serão os acompanhamentos(garnish)
 *  3. Ingredientes crus(raw) serão cozidos no ensopado
 *  4. Ingredientes que são para beber
 * Ex:
 *  {
 *    garnish: [todos os ingredientes cozidos],
 *    stew: [todos os ingredientes utilizados no ensopado],
 *    toDrink: [todas as bebidas da mesa]
 *  }
 */

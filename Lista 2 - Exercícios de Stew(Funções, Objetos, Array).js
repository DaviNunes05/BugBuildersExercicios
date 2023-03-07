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
    },
];

/**
 * Exercício 8
 * ------------
 * Crie uma função que retorne todos os ingredientes crus(raw) que não estejam podres(rotten)
 */

function rawRotten() {
    ingredientesBons = [];
    ingredientes.forEach((ingrediente) => {
        ingrediente.status == "raw" && ingrediente.isRotten == false
            ? ingredientesBons.push(ingrediente.name)
            : "";
    });
    return ingredientesBons;
}
console.log(rawRotten());

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

function statusIngredientes() {
    let good = [];
    let rottens = [];
    ingredientes.forEach((ingrediente) => {
        ingrediente.isRotten == true
            ? rottens.push(ingrediente.name)
            : good.push(ingrediente.name);
    });
    return { good: good, rottens: rottens };
}
console.log(statusIngredientes());

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

function ensopado(){
    let cooked = [];
    ingredientes.forEach(ingrediente => {
        if(ingrediente.status == 'cooked' && ingrediente.isRotten == false){
            cooked.push(ingrediente.name);
        }
    })
    
    let raw = [];
    ingredientes.forEach(ingrediente => {
        if(ingrediente.status == 'raw' && ingrediente.isRotten == false){
            raw.push(ingrediente.name);
        }
    })

    let toDrink = [];
    ingredientes.forEach(ingrediente => {
        if(ingrediente.status == 'to drink' && ingrediente.isRotten == false){
            toDrink.push(ingrediente.name);
        }
    })

    return {cooked:cooked, raw:raw, toDrink: toDrink}
}

console.log(ensopado());
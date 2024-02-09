const prompt = require("prompt-sync")({ sigint: true });

// 1
/* CREAR UN ARREGLO DONDE CADA ARREGLO REPRESENTA UN TWEET. CADA TWEEET DEBE TENER LAS SIGUIENTES PROPIEDADES
-ID,TEXTO,CANT. LIKES,CANT. RETWEET, ES PRIVADO
-ARREGLO DEBE TENER 5 TWEETS
-IMPLEMENTA UNA FUNCION QUE RECIBA POR PARAMETRO EL ARRAY CREADO Y UN ID L A MISMA DEVERA RETORNAR UN BOOLEANO INDICANDO SI ESE TW ES PRIVADO O NO */



const arrayDeTwwets = [
    {
        id: 1,
        texto: 'hola soy un tweet',
        likes:3,
        retweet:1,
        esPrivado: true
    },

    {
        id: 2,
        texto: 'perro y gatos',
        likes:1,
        retweet:0,
        esPrivado: false
    },

    {
        id: 3,
        texto: 'futbol y basquet mis prefes',
        likes:8,
        retweet:3,
        esPrivado: true
    },

    {
        id: 4,
        texto: 'que es eso?',
        likes:0,
        retweet:0,
        esPrivado: true
    },

    {
        id: 5,
        texto: 'REEEE',
        likes:1,
        retweet:5,
        esPrivado: false
    },
];

const privacidadPorid = (arrayDeTwwets, id) => {
    for (let i = 0; i < arrayDeTwwets.length; i++) {
        if (arrayDeTwwets[i].id === id){
            return arrayDeTwwets[i].esPrivado == true ? 'Es privado' : 'No es privado';
        }

    }
    
    return 'Tweet no encontrado';
}; 
console.log(privacidadPorid(arrayDeTwwets,3));

// DADO EL SIGUIENTE ARRAY. CREAR UNA FUNCION QUE ORDE LOS AUTOS POR ANIO DE FOTMA DESCENDENTE

const autos = [
    {
        marca: 'toyota',anio: 2014, color: 'rojo'
    },
    {
        marca: 'renault',anio: 2015, color: 'gris'
    },
    {
        marca: 'peugeot',anio: 2017, color: 'rojo'
    },
    {
        marca: 'fiat',anio: 2019, color: 'negro'
    }
]

const ordenarPorAnio = (autos) => {
    for (let i = 0; i < autos.length; i++) {
       for (let j = 0; j < autos.length - 1; j++) {
        if (autos[j].anio > autos[j+1].anio) {
            let temp = autos[j];
            autos[j] = autos[j+1];
            autos[j+1] = temp;  
        }
       }
       return autos;
        
    }
};
console.log(ordenarPorAnio(autos));



// 2 DADA LA SIGUINTE MATRIZ
/*  1. Crear una funcion que reciba la matriz por parametro y devuelva la multiplicacion de los elementos de la
 segunda fila (recorda que las posiciones inician en 0)
 
    2. Crear una funcion que reciba a la matriz por parametro y devuellva un nuevo
    array con todos los valores de la matriz que sean pares y mayores a 6
 */

let matriz =[
    [13,21,3,10],
    [39,14,52,12],
    [6,72,87,1],
    [6,72,8,11],
    [5,67,1,79],
];


const multiplicacionSegundaFila = (matriz) => {
    let sumaFilaDos = 1;
    for (let i = 0; i < matriz[1].length; i++) {
        sumaFilaDos *= matriz[1][i];
    }
    return sumaFilaDos;
};

console.log(multiplicacionSegundaFila(matriz));

const ordenMatriz = (matriz) =>{
    nuevaMatriz =[];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            const numero = matriz[i][j];
            if( numero % 2 === 0 && numero > 6){
                nuevaMatriz.push(numero);
            }
        }        
    }
    return nuevaMatriz;
} ;
console.log(ordenMatriz(matriz));





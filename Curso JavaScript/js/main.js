///////////////////
// JavaScript V //
// Objetos y objetos globales, almacenamiento persistente e iteracion en arrays, objetos y arrays de objetos

//////////////
// Objetos //
/* Colecciones de pares clave-valor usados para representar datos complejos en una estructura facil de gestionar.

Un objeto se define usando llaves {} y contiene propiedades (valores asignados a una claves)*/

// Ejemplo de objeto literal (la manera mas comun de crear objetos en JavaScript)
let alumna = {
    nombre: "Alexa",
    edad: 30,
    ocupacion: "Desarrolladora",

    // this hace referencia al objeto desde el cual se esta invocando al metodo
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y soy ${this.ocupacion}`);
    }
}

let alumna2 = ["Ariadna", 35, "Diseñadora web"];

// Mucho mas sencillo acceder a datos complejos si estan guardados con una clave
console.log(alumna.ocupacion);
console.log(alumna2[2]); // En lugar de acceder por su lugar en el array

// Podemos acceder a las propiedades de un objetos
console.log(alumna.nombre); // Notacion de puntos
console.log(alumna["ocupacion"]); // Notacion de corchetes
alumna.saludar(); // Gracias a la palabra clave this, estamos obteniendo los valores referidos a ese objeto



/////////////////////////////////////////////
// Como almacenar los datos en JavaScript //
/* En JS almacenar datos implica elegir la estructura adecuada de acuerdo al tipo de informacion que tenemos

    - Variables simple: para valores unicos como numeros y strings
    - Objetos: para representar datos complejos con pares CLAVE-VALOR
    - Arrays: para almacenar una lista ORDENADA de elementos, idealmente del mismo tipo
    - Arrays de objetos: Para manejar listas ordenadas de elementos complejos que contienen multiples propiedades

*/


////////////////
// Iteracion //

////////////////
// En arrays //
let numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}


///////////////////////////
// En arrays de objetos //

let personas = [
    { nombre: "Alexa", edad: 30, ocupacion: "Desarrolladora front", nota: 8 },
    { nombre: "Ariadna", edad: 35, ocupacion: "Diseñadora web", nota: 4 },
    { nombre: "Romina", edad: 25, ocupacion: "Desarrolladora back", nota: 10 }
];


////////////////////////
// Bucle for clasico //

// Es la manera mas rapida y eficiente de iterar, podemos usar las keywords break y continue
let personasMasTreinta = [];

for (let i = 0; i < personas.length; i++) {
    console.log(personas[i]); // Para imprimir cada uno de los objetos a partir de su posicion en el array personas[0]...personas[2]

    console.log(personas[i].nombre);

    if(personas[i].edad >= 30) {
        personasMasTreinta.push(personas[i]);
    }
}

console.log(personasMasTreinta);

////////////////
// forEach() //

// For each es una manera mas limpia de iterar, no necesita contador, pero no se puede romper el bucle con break o continue

// Trabajando con arrays de objetos con bucles forEach()
personas.forEach(persona => { // Le llamamos persona a cada elemento de la iteracion
    console.log(`${persona.nombre} se dedica a ${persona.ocupacion}`);
});


personas.forEach(persona => {
    persona.aprobado = persona.nota > 4;
})

console.log(personas);


// Funciones de alto nivel o high order functions -> Funciones que realizan funciones 

////////////
// map() //

// Ej array simple
// Transformar cada elemento, nos devuelve un nuevo array con los rsultados
const nums = [1, 2, 3, 4, 5, 6];
const dobles = nums.map(n => n * 2);
console.log(dobles);

// Ej con array de objetos
const nombresPersonas = personas.map(per => per.nombre);
console.log(nombresPersonas);

///////////////
// filter() //

// Permite seleccionar elementos que cumplan la condicion y retorna un nuevo array con elementos filtrados

// Ej con array simple
const pares = nums.filter(num => num % 2 === 0);
console.log(pares);

// Ej con array de objetos
const notasAltas = personas.filter(per => per.nota > 8);
console.log(notasAltas);


///////////////
// reduce() //

// Reduce el array a un unico valor y nos devuelve el valor acumulado

// Ejemplo con array simple
const suma = nums.reduce((acum, num) => acum + num);
console.log(suma);


// Ejemplo con array de objetos
const ventas = [
    { producto: 'Camisa', cantidad: 3, precio: 25 },
    { producto: 'Pantalón', cantidad: 2, precio: 40 },
    { producto: 'Zapatos', cantidad: 1, precio: 80 }
];

const totalVentas = ventas.reduce((total, item) => {
    return total + (item.cantidad * item.precio)
} , 0);

console.log(totalVentas);


/////////////
// find() //

// Busca el primer elemento que cumpla una condicion
const personaReprobada = personas.find(persona => persona.nota < 5);
console.log(personaReprobada);


/* EJERCICIOS OPCIONALES PARA PRACTICAR

Crear un aray de objetos que represente una lista de productos, cada uno con propiedades 
    - nombre
    - precio
    - stock

Usen map() para reducir el precio de cada producto en un 10%
Usen filter para obtener solo los productos con stock disponible
Usen reduce para obtener el valor total del inventario
*/

// TODO proxima clase ver JavaScript 6 -> Manipular el DOM
// TODO proxima clase consumir datos de una API Rest -> transformar el JSON en objetos javascript, iterarlos y mostrarlos por pantalla
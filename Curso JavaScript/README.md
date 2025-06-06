# Curso JavaScript

## JavaScript IV
```js
////////////////////
// JavaScript IV //
// Introduccion a arrays, metodos de strings y arrays

/////////////
// Arrays //

/* Una lista ORDENADA de elementos (notacion 0 -> El primer elemento es el 0)
Cada elemento tiene una posicion o indice, los arrays pueden contener cualquier tipo de datos, numeros, cadenas, booleanos, otros arrays, objetos, funciones, etc

EXTRA/////// 
Ademas de arrays y objetos, las estructuras fundamentales de datos en JavaScript, tambien tenemos otras estructuras como son 
Map () -> Coleccion de pares clave-valor

Set () -> Coleccion de valores unicos, no permite elementos duplicados

Date -> Estructura para manejar fechas y horas

JSON -> Estructura para representar datos en texto. Se convierte a y desde objetos con JSON.stringify() y JSON.parse()
*/

let frutas = ["manzana", "banana", "naranja"];

console.log(frutas[0]);
console.log(frutas[2]);

let texto = "Hola";
console.log(texto.split(""))

// Metodos de strings en javascript
// https://drive.google.com/drive/u/1/folders/1QJtNkPRSPVN4S2WCuwoeNcxrZbZkPH0y


// Metodos de arrays en javascript
// https://drive.google.com/drive/u/1/folders/1QJtNkPRSPVN4S2WCuwoeNcxrZbZkPH0y


// TODO Repasar Funciones de alto nivel en JavaScript + Objetos 
```

---

## JavaScript III
```js
/////////////////////
// JavaScript III //
// Scope y ambito, funciones, tipos de funciones, parametros y argumentos, funciones flecha


////////////
// Scope // (Ambito)
// Se refiere al contexto en el cual las variables y funciones son accesibles o referenciadas.

// Global scope o Ambito global
// Las variables declaradas fuera de cualquier funcion o bloque -> {} tienen alcance global y son accesibles desde cualquier parte del codigo
var globalVar = "Soy del globo!";

// Declaramos una funcion
function mostrarGlobal() {
    console.log(globalVar);
}

// Invocamos o llamamos a la funcion
mostrarGlobal();

console.log(globalVar);


// Local scope / Function Scope o Ambito local o de funcion
// Las variables declaradas DENTRO de una funcion solo son accesibles dentro de esa funcion. Por tanto, esas variables tienen un ambito local

function mostrarLocal() {
    var localVar = "Soy de All Boys";
    console.log(localVar);
}

mostrarLocal();
// console.log(localVar); Uncaught ReferenceError: localVar is not defined


// Block scope o Ambito de bloque -> {}
// A partir de ES6 (JavaScript desde 2015). Las (nuevas) variables declaradas con let y const tienen alcance de bloque, lo que significa que solo son accesibles dentro del bloque en que se declararon, por ejemplo, dentro de llaves {}, de un if, for, etc

if (true) { // Condicion que siempre se cumple

    let bloqueVar = "Soy de bloque";
    console.log(bloqueVar);
}

// console.log(bloqueVar); Uncaught ReferenceError: bloqueVar is not defined



/////////////////////////////////////
// Scope chain o Cadena de ambito //
var globalVar2 = "Soy global!";

function externa() {
    var externaVar = "Soy de externa";

    function interna() {
        var internaVar = "Soy de interna";
        console.log(globalVar2);
        console.log(externaVar);
        console.log(internaVar);
    }

    interna();
    // console.log(internaVar); Uncaught ReferenceError: internaVar is not defined
}

externa();

/* Funcion inicializadora
function    () {
    llamadaFuncion1();
    llamadaFuncion2();
}

init();
*/

// Function scope vs Block scope
// Ejemplo de ambito de funcion
function scopeFunction() {
    if (true) {
        var funcionVar = "Soy de funcion"
    }

    console.log(funcionVar);
}

scopeFunction();


// Ejemplo de ambito de bloque
function scopeBloque() {
    if (true) {
        let bloqueLet = "Soy del Celta de Vigo";
        const bloqueConst = "Soy de San Lorenzo de Almagro";
    }

    // console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined
    // console.log(bloqueConst); // Uncaught ReferenceError: bloqueConst is not defined
}

scopeBloque();



///////////////////////////
// Hoisting o Elevacion //
// Las declaraciones de variables y funciones en JavaScript se mueven hacia arriba de su contexto de ejecucion (scope)
// Pero solo las declaraciones son elevadas, no las inicializaciones

// Variables var -> Se elevan y se inicializan con undefined
console.log(elevadaVar); // undefined
var elevadaVar = "Estoy re elevada!!";
console.log(elevadaVar);

// Variables con let y const -> Se elevan pero NO se inicializan, lo que lleva a un error si se accede antes de la declaracion
// console.log(elevadaLet); // Uncaught ReferenceError: Cannot access 'elevadaLet' before initialization
let elevadaLet = "Soy mas tranca";
console.log(elevadaLet);



/*
// Diferencias entre var, let y const

- var: tiene ambito de funcion y permite la redeclaracion y la reasignacion

- let: tiene ambito de bloque {} y solo esta disponible dentro de ese bloque. Permite la redeclaracion pero no la reasignacion

- const: tiene ambito de bloque {} pero a diferencia de let, prohibe la reasignacion y redeclaracion
*/

// Usaremos const para variables de solo lectura
const PI = 3.1416;

// Usaremos let (siempre) para variables que puedan cambiar
let contador = 0;
contador++;
console.log(contador);

// Ejercicio propuesto, hacer ejercicios con los 3 tipos de variables



//////////////////////////////
// Funciones en JavaScript //

// Funcion declarada: usaremos la palabra clave function
function nombreFuncion() {
    // bloque de codigo
}

// Ejemplo de funcion asincronica
console.log("Inicio llamada funcion asincronica");

setTimeout(function() {
    console.log("Soy una funcion asincronica que tardo 1 seg en ser ejecutada")
}, 1000);

console.log("Fin llamada funcion asincronica");


// Funciones con parametros: definimos variables en las funciones que acepten valores cuando se les llama

// Los parametros son los nombres de las variabels que definimos en la declaracion de la funcion
function sumar(a, b) {
    return a + b; // Funcion que devuelve un valor con la palabra clave return
}

console.log(sumar(2, 3)); // Los argumentos on los valores que le pasamos a la funcion cuando la llamamos

function alentar(equipo = "CASLA") {
    console.log(`Aguante ${equipo}!!!`);
}

alentar("Lanus");

// Funciones flecha
// Son una forma mas moderna (ES6) y compacta de escribir funciones
let saludar = nombre => console.log(`Hola ${nombre}`);

saludar("Alexa");

let sumaTres = (a,b,c) => {
    return a + b + c;
}

console.log(sumaTres(1, 2, 3));

// Recuerden repasar (explicacion en el video)
// Tipos de funciones en JavaScript 
// Tipos de funciones flecha en JavaScript
```

---

## JavaScript II
```js
////////////////////
// JavaScript II //
// Control de flujo, estructuras de control, condicionales y bucles I

/* Tipos de estructuras de control de flujo

    Condicionales
    - if, else if, else
    - Operadores logicos: &&, ||, !
    - Operadores ternarios

    Bucles
    - for
    - while
    - do...while

    Control de flujo avanzado
    - break
    - continue
    - switch
*/

// Condicional if
// Usaremos para ejecutar un bloque de codigo si una condicion es verdadera
let edad = 25;

if( edad >= 18) {
    console.log("Sos mayor de edad");

} else if(edad < 18 && edad > 0) {
    console.log("Sos menor de edad");

} else {
    console.log("Edad invalida");
}

/* Operadores logicos
    - AND / &&: Ambas condiciones deben ser verdaderas
    - OR / ||: Al menos una condicion debe ser verdadera
    - NOT / !: Niega el valor de una condicion, es el operador de negacion logica
*/

let tieneLicencia = false;

if(edad >= 18 && tieneLicencia) {
    console.log("Podes manejar");
}

if(edad< 18 || !tieneLicencia) {
    console.log("No podes manejar");
}

/* Valores truthy y falsy en JavaScript

En JavaScript, los valores truthy y falsy son conceptos importantes que se utilizan cuando se evalúan expresiones en un contexto booleano, como en las condiciones de un if o un while. Un valor es considerado truthy cuando se evalúa como verdadero en un contexto booleano, y falsy cuando se evalúa como falso

Los valores falsy incluyen: 0, -0, "", null, undefined, NaN y false Por otro lado, los valores truthy son todos los demás valores que no son falsy, incluyendo cualquier número distinto de cero, cualquier cadena de texto que no esté vacía, objetos, arrays y funciones

Es importante tener cuidado con las conversiones implícitas en JavaScript, ya que pueden generar resultados inesperados. Se recomienda utilizar siempre el comparador de identidad === en lugar del comparador de igualdad == para evitar muchos errores

Además, aunque algunos valores como el cero o null parecen seguir una regla sólida al ser evaluados como falsy, puede haber comportamientos inesperados. Por ejemplo, una variable sin asignar un valor será truthy, pero si se define explícitamente como undefined será falsy
*/

// El operador !, nos permite verificar si una variable es falsy
// Valores truthy y falsy
let valor1 = 0;
let valor2 = "Hola";

console.log(!valor1); // true porque 0 es falsy
console.log(!valor2); // false porque una cadena no vacia es truthy


// Ejemplo toggle (funcion interruptor), significa en ingles alternar o cambiar
let estado = true;

// Declaramos una funcion
function alternarEstado() {
    estado = !estado;
    console.log(`Nuevo estado: ${estado}`); // Template literals `texto y ${variable}`
}


// Invocamos o llamamos a la funcion
alternarEstado();
alternarEstado();
alternarEstado();


// Operador ternario -> ?
// Es una forma mas compacta de escribir una condicion if...else
let edad2 = 20;
let mensaje = (edad >= 18) ? "Sos mayor de edad!" : "Sos menor de edad";
console.log(mensaje);


/* Bucle for clasico

for (inicializacion; condicion; incremento) {
    // Codigo a ejecutar en cada iteracion
}
*/

// Bucles for anidados
for (let i = 0; i < 3; i++) {

    for(let j = 0; j < 3; j++) {

        console.log(i + "-" + j);
    }
}

/* Bucle while
Ejecuta el bloque de codigo mientras la condicion sea verdadera

    while(condicion) {
        // Codigo a ejecutar mientras la condicion sea verdadera 
    }
*/

let i = 0;
while(i < 5) {
    console.log(`Iteracion: ${i}`);
    i++;
}

/*Bucle do...while

    do {
        // Codigo a ejecutar
    } while (condicion);
*/

let z = 0;
do {
    console.log(`Iteracion: ${z}`);
    z++;
} while( z < 5);


////////////////////////////////
// Control de flujo avanzado // 
// break y continue

for(let i = 0; i < 10; i++) {
    /* Ejemplo con break
    if(i === 5) {
        break; // Salimos del bucle cuando i es 5
    }
    */
   
    // Ejemplo con continue
    if(i % 2 === 0) {
        continue; // Saltamos las iteraciones en las que i es par
    }
    
    console.log(i);
}


/////////////
// switch //
/* Es otra estructura de control que permite evaluar una expresion y ejecutar el bloque de codigo correspondiente

    switch(expresion) {
        case valor1:
            // Codigo que se ejecuta si la expresion es igual a valor1
            break;

        case valor2:
            // Codigo que se ejecuta si la expresion es igual a valor2
            break;

        default:
            // Codigo que se ejecuta si ninguno de los casos coincide
    }
*/

let diaSemana = parseInt(prompt("Escriba el numero del dia de la semana"));
console.log(typeof diaSemana)

// Usaremos switch para verificar que dia de la semana es

switch (diaSemana) {
    case 1:
        console.log("Es lunes");
        break;

    case 2:
        console.log("Es martes");
        break;


    case 3:
        console.log("Es miercoles");
        break;



    case 4:
        console.log("Es jueves");
        break;



    case 5:
        console.log("Es viernes");
        break;

    
    default:
        console.log("Es fin de semana! Yupiiii!");
}

// Ejercicio propuesto
// Escribir una calculadora por prompt, donde recoja dos valores, los almacene en variables y recoja el valor de la operacion
```


---



## JavaScript I
```js
///////////////////
// JavaScript I //
// Conceptos elementales, sintaxis básica, variables, tipos de datos y operadores

console.log("Hola mundo desde JavaScript");

/* Comentario de
multiples
lineas
*/

/* Tipos de variables

    var: Declaracion historia de variables pero con limitaciones como el hoisting y el scope

    let: Manera moderna de declarar variables, tiene un alcance de bloque

    const: Manera moderna de declarar variables, tambien con alcance de bloque, pero cuyo valor no puede cambiar una vez asignado y no permite reasignacion
*/

var nombre = "Alexa";
let edad = 25;
const pi = 3.1416;

console.log(nombre);
console.log(edad);
console.log(pi);

/* Tipos de datos primitivos

    Numeros: Valores numericos
    Cadenas: Texto encerrado entre comillas simples o dobles
    Booleanos: true o false
    null: Valor intencionalmente vacio
    undefined: Una variable declarada pero sin valor
*/

let numero = 42;
let texto = "Hola";
let verdadero = true;
let vacio = null;
let indefinido;

console.log(numero);
console.log(texto);
console.log(verdadero);
console.log(vacio);
console.log(indefinido);

let x = 5;
let y = "5";
console.log(x === y);

// Operadores en JavaScript
// https://www.w3schools.com/js/js_operators.asp
```
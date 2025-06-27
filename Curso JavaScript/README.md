# Curso JavaScript

## JavaScript VIII
```js
////////////////////
// JavaScript VII //
// JSON, asincronia, promesas y fetch, async-await y try/catch


///////////
// JSON //
/*
JavaScript Object Notation o JSON es un formato para enviar e intercambiar datos en internet
Usa la notacion de objetos de JavaScript, pero es independiente de lenguaje y es un formato super ligero
*/

// Objeto JavaScript normal
let alumno = {
    nombre: "Nicolas",
    edad: 30,
    aprobado: true
};

console.log(alumno);

// Convertir a JSON para enviar datos
let jsonAlumno = JSON.stringify(alumno);
console.log(jsonAlumno);

// Convertir JSON a objeto para recibir datos
let objetoAlumno = JSON.parse(jsonAlumno);
console.log(objetoAlumno);
console.log(objetoAlumno.nombre);


////////////////////////////
// Ejemplo de asincronia //

console.log("Inicio");

setTimeout(() => {
    console.log("Esto se ejecuta despues de dos segundos");
}, 2000);

console.log("Final");


///////////////////////
// Promesas y fetch //

// Usamos la manera tradicional de usar fetch, con promesas encadenadas .then()
/*
fetch("https://jsonplaceholder.typicode.com/users") // 1. Hacemos una peticion a una URL para traer datos en texto plano (JSON) 
    .then(respuesta => respuesta.json())            // 2. Parseamos estos datos para poder trabajar con ellos
    .then(data => console.table(data))              // 3. Ahora hacemos operaciones con esta informacion ya procesada
    .catch(error => console.error(error));          // 4. En caso de fallar alguno de los pasos anteriores, imprimiremos un mensaje de error por consola
*/

let contenedorUsuarios = document.getElementById("contenedor-usuarios");

// Usamos la sintaxis mas moderna y limpia de manejar operaciones asincronas, con async/await
async function cargarUsuarios() {

    try {
        // 1. Hacemos una peticion a una URL para traer datos en texto plano (JSON) 
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    
        // 2. Parseamos estos datos para poder trabajar con ellos
        let datos = await respuesta.json();
    
        console.table(datos);

        mostrarUsuarios(datos);

    } catch (error) {
        console.error(error);
    }

}

function mostrarUsuarios(datos) {
    let htmlUsuarios = "";

    datos.forEach(usuario => {
        htmlUsuarios += `
            <li> Nombre: <strong>${usuario.name}</strong> / Telefono: <i>${usuario.phone}</i></li>
        `;
    })

    contenedorUsuarios.innerHTML = htmlUsuarios;
}

cargarUsuarios();
```

---

## Javascript VI
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Mi página</title>
    </head>
    <body>
        <h1>Bienvenidos</h1>
        <p>Este es un párrafo</p>
    </body>
</html>

<!--
• document
    ◦ html
        ▪ head
            ▪ title
        ▪ body
            ▪ h1
            ▪ p
-->
```

```js
////////////////////
// JavaScript VI //
// Manipulacion del DOM en JavaScript y eventos

/* El DOM (Document Object Model) es la forma en la que se estructuran las paginas web en el navegador
// https://imgs.search.brave.com/v7sJ_jxpQQElXG-cqxdHi00rZxAxdKYr0DN7La9Mg2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGllcnJlLWdpcmF1/ZC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMTEvamF2/YXNjcmlwdC1yZXBy/ZXNlbnRhdGlvbi1k/b20uanBn

- JavaScript puede acceder y modificar cualquier elemento del DOM utilizando el objeto global document
- Modificar el contenido de textos, atributos, clases
- Añadir o eliminar elementos del DOM
- Escuchar eventos de usuario (clicks, teclado, etc)
*/

//////////////////////////////////
// Seleccionado elementos HTML //

// getElementById() -> Selecciona un elemento por su id
let titulo = document.getElementById("titulo");

console.log(titulo.textContent); // Titulo principal

// querySelector() -> Selecciona el primer elemento y querySelectorAll() -> Selecciona TODOS los elementos
let primerParrafo = document.querySelector(".mensaje"); // Seleccionamos el primer elemento que coincida con un selector CSS
console.log(primerParrafo.textContent);

let parrafos = document.querySelectorAll(".mensaje"); // Seleccionamos TODOS los elementos y nos devuelve un array (realmente es una NodeList)
parrafos.forEach(parrafo => console.log(parrafo.textContent));



////////////////////////////////////////
// Modificando contenido y atributos //
/*
- textContent: Modificar el texto dentro de un elemento
- innerHTML: Modificar el contenido HTML dentro de un elemento
- setAttribute: Modificar los atributos de un elemento
- style: Cambiar el estilo CSen linea de un elemento
*/

let parrafo = document.getElementById("parrafo");

// Cambiar el texto
parrafo.textContent = "Este es un nuevo texto modificado desde JavaScript";

// Introducir HTML
parrafo.innerHTML = "<strong>Este es un HTML agregado desde JavaScript</strong>";



let boton = document.getElementById("boton");

// Cambiar el atributo id
boton.setAttribute("id", "nuevoID");

boton.style.backgroundColor = "green";



//////////////
// Eventos //
/*
U evento es una señal que se envia cuando ocurre una interacion o cambio en el documento (click, pulsacion de tecla, mover el mouse, etc). JavaScript nos permite escuchar estos eventos y ejecutar funciones especificas cuando suceden

    • Eventos de mouse: click , dblclick , mouseover , mouseout , mousemove
    • Eventos de teclado: keydown , keyup 
    • Eventos de formulario: submit , change , input , focus
    • Eventos de ventana: resize , scroll , load , unload
*/

// Escuchar el evento click
boton.addEventListener("click", function() {
    console.log("Holis, me hiciste click, queres algo flaco?")
})

let input = document.getElementById("input");

// Escuchar el evento keydown
input.addEventListener("keydown", function(event) { // Gracias al objeto event, accedemos a informacion del evento
    console.log(`Tecla presionada: ${event.key}`);
})

/////////////////////////////
// Propagacion de eventos //
/*
Cuando ocurre un evento, este se propaga a traves del DOM en dos fases
- Fase de captura: de arriba para abajo
- Fase de burbuja: de abajo para arriba

Podremos detener la propagacion de un evento usando el metodo event.stopPropagation()
*/

let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");

// Escuchar el click en el div padre
padre.addEventListener("click", function() {
    console.log("Se hizo click en el div padre");
});

// Para evitar la propagacion de eventos y que el evento del hijo active el evento del padre, usaremos event.stopPropagation()
hijo.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Hiciste click en el boton hijo");
});

// event.preventDefault() se usa para evitar el comportamiento predeterminado de un elemnto, por ejemplo, para evitar que un formulario se envie al hacer click en un boton enviar
let formulario = document.getElementById("formulario");

// Evitamos que el formulario se envie
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitamos el envio por defecto del formulario
    alert("Formulario no enviado");
});
```

---

## JavaScript V
```js
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
```

---

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
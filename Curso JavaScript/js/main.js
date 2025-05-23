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

// TODO -> Proxima clase
// Control de flujo avanzado: break y continue
// switch
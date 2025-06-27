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



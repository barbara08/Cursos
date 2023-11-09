// querySelector  solo se ve 0 o 1 elemento    VIDEO 144

    const heading = document.querySelector("h2");

    heading.textContent = "Nuevo querySelector"; //textContent  cambia el texto
    console.log(heading);


// querySelectorAll    VIDEO 145

    const enlaces = document.querySelectorAll("a");
    console.log(enlaces);

    //Para acceder solo a uno se hace igual como un array
    console.log(enlaces[0]);

    //Si queremos cambiar el texto usamos textContent
    enlaces[1].textContent = "Repito enlace Google";
    //Podemos cambiar la url también 
    enlaces[1].href = "https:google.com";
    //Agregar clases
    enlaces[1].classList.add("nueva_clases");
    //Eliminar clases
    enlaces[1].classList.remove("nueva_clases");  


// getElementById    VIDEO 145

    const heading2 = document.getElementById("heading2");
    console.log(heading2);


// Crear HTML    VIDEO 146

// Vamos a Crear un nuevo enlace =>  <a href="https:javascript.com// class="nuevo-enlace">JS</a>
//También voy a crear un br para que el nuevo enlace aparezca debajo

//para ello hay que crear también los atributos (href, text, class etc)

// Se recomienda que se cree la etiqueta en mayúsculas
const nuevoEnlace = document.createElement("A");
const br = document.createElement("BR");

//Agregar el href
nuevoEnlace.href = "https:javascript.com";

//Agregar el text
nuevoEnlace.textContent = "JS";

//Agregar la clase
nuevoEnlace.classList.add("nuevo-enlace");

//Falta Agregar el nuevo enlace al documento  con apendChild
const navegacion = document.querySelector(".navegacion");
//Añado primero br antes del nuevo enlace
navegacion.appendChild(br);
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


//Eventos    VIDEO 147

//window hace referencia general
//document hace referencia solo al html
//2 y 3 es lo mismo
//4 se usa más
console.log(1); 

//Estas funciones se les conoce como call back
window.addEventListener("ĺoad", function(){ 
    //load espera a que JS y los archivos (css, img, etc) que dependen del html en estén listos
    console.log(2); // no ok, puede ser porque no hay archivos css, ni img etc...?
});

window.onload = function(){
    console.log(3); 
};

//Si la función es muy grande se puede hacer la función fuera
window.onload = imprimir; //NO HACE falta poner paréntesis de la función

function imprimir(){
    console.log(3.3); 
}

    //Se utiliza más 
document.addEventListener('DOMContentLoaded', function(){ //solo espera por el html, pero no espera CSS o img etc
    console.log(4); 
});

console.log(5);

//No tengo scroll por lo que no saldrá nada
window.onscroll = function(){
    console.log("scrrolling...");
}


//Reaccionar a Clicks  VIDEO 148

// Seleccionar elementos y asociarles un evento

const btnEnviar = document.querySelector(".boton-primario");

/* // Código comentado para poder usar evento type submit (más abajo)
btnEnviar.addEventListener("click", function(evento){
    evento.preventDefault(); //Para que no se recargue la página, pero no te lleva a la página, esto es últil para validar formulario
    console.log("Enviado formulario");
});
*/

// Eventos con el teclado   VIDEO 149

//Eventos de los inputs y textarea

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');


//CREANDO FUNCION
nombre.addEventListener("input", valorInput);
email.addEventListener("input", valorInput);
mensaje.addEventListener("input", valorInput);

function valorInput(event) {
    console.log(event.target.value);
}
//CREANDO FUNCION 
datos = {
    nombre: "",
    email: "",
    mensaje: ""
}
function valorInput2(event) {
    datos[event.target.id] = event.target.value;
    console.log(datos);
}

nombre.addEventListener("input", valorInput2);
email.addEventListener("input", valorInput2);
mensaje.addEventListener("input", valorInput2);


/* FORMA CORRECTA PERO SE PUEDE SIMPLIFICAR 
nombre.addEventListener("input", function (event) {
    console.log(event.target.value);
});
email.addEventListener("input", function (event) {  
    console.log(event.target.value); 
});
mensaje.addEventListener("input", function (event) {
    console.log(event.target.value);
});
*/

// Eventos en Formularios    VIDEO 150 y 151

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    //Validar formulario
    const {nombre, email, mensaje} = datos;  //coger los datos del objeto ya creado anteirormente
    if(nombre === "" || email === "" || mensaje === ""){
        //console.log("Todos los campos son obligatorios");
        //Creamos la función para mostrar mensaje de error al usuario
        mostrarError("Todos los campos son obligatorios");
        //Función del refactoring
        mostrarAlerta("Todos los campos son obligarotios, refactoring", true);
        return;
    }

    //Enviar el formulario, creamos 
    //console.log("Enviando el Formulario");
    mostrarMensaje("Mensaje enviado correctamente");
    //Función del refactoring
    mostrarAlerta("Mensaje enviado correctamente, refactoring");
});

//Crear función de mensaje de error para validación del formulario
//En ella creamos una etiqueta html "P" y le añadimos una class "error"
//Una vez creado todas las etiquetas html que queramos hay que añadirlas al documento html para que 
//aparezca en pantalla con appendChild

function mostrarError(mensaje) {
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("errorMensaje");
    //Para añadirlo al documento HTML
    formulario.appendChild(error);  
    //console.log(error);
    //El mensaje de error se queda fijo pero queremos que desapazca
    setTimeout(() => {
        error.remove();
    }, 5000);
}
//Creamos función para decir que se ha enviado los datos correctamente

function mostrarMensaje(mensaje) {
    const mensajeValido = document.createElement('P');
    mensajeValido.textContent = mensaje;
    mensajeValido.classList.add('formValidado');
    formulario.appendChild(mensajeValido);

    setTimeout(() => {  
        mensajeValido.remove();
    }, 5000);
}


//REFACTORING     VIDEO 152
//Unimos las dos fucniones (mostrarError y mostrarMensje)

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('errorAlerta');
    }else {
        alerta.classList.add('correctAlerta');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}




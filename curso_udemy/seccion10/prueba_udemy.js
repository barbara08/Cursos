// Object
/*
const producto = {
    nombreProducto: "Monitor 20 Pulgaddas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso : "1kg",
    medida : "1m"
}
console.log(producto);
console.log(producto.nombreProducto);

// Agregar atributos
producto.imagen = "es una imagen.jpg";

// Eliminar atributos
delete producto.imagen;

//Destructuring

//Primera forma (es lo que se conoce como Destructuring)
const {precio} = producto;
// Se puede crear más variables en la misma linea
const {nombreProducto, disponible} = producto;

console.log(precio);
console.log(nombreProducto);
console.log(disponible);
console.log(precio, nombreProducto, disponible);


//Segunda forma (NO es Destructuring)
const precioProducto = producto.precio;
console.log(precioProducto);


//Object Methods
//.freeze  NO deja agragar, modificar ni eliminar propiedades
//.seal NO deja agregar ni eliminar propiedades pero SI puede modificar el existente
Object.freeze(producto);
//Object.seal(producto);

//Unir dos objetos
//Recomienda dejar los objetos originales

const nuevoProducto = {...producto, ...medidas};
console.log(nuevoProducto);



//Arrays

const numeros = [10, 20, 30, 40, 50];
console.table(numeros);  // Otra forma de ver resultados
console.log(numeros);
//Para acceder al valor de esa posición
console.log(numeros[2]);

console.log(numeros.length);

//Iteration del array
numeros.forEach(function(x) {
    console.log(x);
});

//Métodos para array PERO modifica el array original
numeros.push(60);  // se agrega el valor al final del array
numeros.unshift(-10,-20,-30); // se agrega el valor al inicio del array
numeros.pop(); // elimina el último elemento del array
numeros.shift(); // elimina el primer elemento del array
numeros.splice(2, 1); // va hacia la posición 2 y elimina un elemento

//Métodos para array PERO sin modificar el array original
const nuevoArray = [...numeros, "100"];  //Hace como el push
console.log(nuevoArray); 
const nuevoArray2 = ["200", ...numeros];  //Hace como el unshift
console.log(nuevoArray2);

// Métodos para array

//Creo un array con objetos (ej: carrito compra)
const carrito = [
    {nombre: "Monitor", precio: 100},
    {nombre: "Televisión", precio: 200},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audífinos", precio: 400},
    {nombre: "Celular", precio: 500}
]

//forEach   funciona bien para objetos planos como números
numeros.forEach(function(n) {
    if(n == "10"){
        console.log("10 si está");
    }
});

//Includes  (simplifica al forEach) funciona bien para objetos planos como números
const resultado = numeros.includes("10");
console.log(resultado);


//Some  ideal para arrays con objetos 
const resultado2 = carrito.some(function(producto){
    return producto.nombre === "Tablet";
});
console.log(resultado2);

//Reduce (sumar los precios de los productos)
   
    // primera forma
const resultado3 = carrito.reduce(function(total, producto){ //pasamos dos valores
    return total + producto.precio
}, 0); // 0 para iniciar en 0
    
    // segunda forma
   // let total=0;
//const resultado4 = carrito.reduce((total, producto => total + producto.precio), 0); 

// resultado3 y resultado4 dan el mismo resultado, la segunda forma es más corta
console.log(resultado3, "3");
//console.log(resultado4, "4");  //  NO OK
//console.log(total, "total");


// filter
const resultado5 = carrito.filter(function(producto){
    return producto.precio > "100";  //ver si hay un producto con el precio mayor de 100
});
console.log(resultado5);  // devuelve todos los productos mayores de 100

const resultado6 = carrito.filter(function(producto){
    return producto.nombre === "Tablet";  //ver si hay un producto con el nombre : Tablet
});
console.log(resultado6);  // devuelve todos los productos que tenga el nombre : Tablet

// FUNCIONES 3 formas: declaración, expresión, IIFE
// Diferencia entre declaración y expresión:
    

// Declaracion de Funcion
    //PODEMOS LLAMAR A LA FUNCIÓN ANTES DE DECLARARLA Y DA RESULTADO YA QUE EN JS 
    // PRIMERO DECLARA LAS FUNCIONES Y DESPUÉS LAS EJECUTA (llamadas)
    //sumar();        (llamada de la función)
    function sumar(){
    console.log(10+10);
}
sumar();

// Expresión de la funcion
    // SI LLAMAMOS A LA FUNCIÓN ANTES DE DECLARARLA NOS DARÁ ERROR YA QUE EN ESTE CASO
    // JS CONSIDERA ESTA FUNCIÓN COMO UNA VARIABLE, 
    //(primero declara las funciones, despuués la ejecuta y después lee las variables

    //sumar2();   //llamada a la función (pero se considera variable)
const sumar2 = function(){
    console.log(3+3);
}
sumar2();

// IIFE  (puede que aparezca en dQuery) no es muy bueno
(function(){
    console.log("Esto es una funcion");
})(); // este paréntesi último es para llamar a la función

// función con parametros por default

function sumar3(n1 = 0, n2 = 0){
    console.log(n1 + n2);
}
sumar3();
sumar3(2, 5);
sumar3(4);
*/  //FIN COMENTARIOS DESDE LA PRIMERA LINEA<
//Funcion que retorna el valor
//el valor dado se guarda en una variable

let total = 0;
function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return 1.15 * total;
}

//simulando carrito
total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuestos es de: $${totalAPagar}`);

//Métodos de la propiedad
const reproductor = {
    reproducir: function(id){
    console.log(`reproducidiendo canción con el ID: $${id}`);
    },

    pausar: function(){
        console.log(`pausando...`);
    },
    crearPlayList: function(nombre){
        console.log(`creando playList: ${nombre}`);
    },
    reproducirPlayList: function(nombre){
        console.log(`reproducir playList: ${nombre}`);
    }
}
// también se puede crear fuera 
reproductor.borrarCancion = function(id){
    console.log(`eliminando la cancion: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20); 
reproductor.crearPlayList("Heavy Metal");
reproductor.reproducirPlayList("Heavy Metal");





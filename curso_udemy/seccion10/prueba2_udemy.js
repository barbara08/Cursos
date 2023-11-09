
//Arrow functions (funciones flecha)
//Sintaxis:    
            //const aprendiendo = () => {}


    //En la declaración de la función NO se usa arrow
    //En la expresión de la función SI se usa arrow

//Expresión de la función
    const sumar = function(n1, n2){
    console.log(n1 + n2);
}
sumar(5, 10);

//Así sería Arrow function

  // quitamos la palabra reservada function y añadimos => 
  // si solo tiene una linea de código se puede quitar las llaves
  // si solo tiene un parámetro se puede quitar los paréntesis
  // en este caso no se podría ya que tiene dos parámetros n1 y n2
const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

//Otro Arrow function

    // los paréntesis del parámetro se puede quitar ya que solo hay uno
const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo("JS");

//EJEMPLOS DE ARROW CON EL CARRITO

const carrito = [
    {nombre: "Monitor", precio: 100},
    {nombre: "Televisión", precio: 200},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audífinos", precio: 400},
    {nombre: "Celular", precio: 500}
]

//NORMAL
const resultado2 = carrito.some(function(producto){
    return producto.nombre === "Tablet";
});
//ARROW FUNCTION
const result2 = carrito.some(producto => producto.nombre === "Tablet");

console.log(`resultado2 ${resultado2}`, `result2 $${result2}`);

//NORMAL
const resultado3 = carrito.reduce(function(total, producto){ //pasamos dos valores
    return total + producto.precio
}, 0); 
//ARROW FUNCTION
const result3 = carrito.reduce((total, producto) => total + producto.precio, 0); 
console.log(`resultado3 ${resultado3}`, `result3 $${result3}`);

//NORMAL

const resultado5 = carrito.filter(function(producto){
    return producto.precio > 100;  //ver si hay un producto con el precio mayor de 100
});
console.log("primer resultado5",resultado5);  // devuelve todos los productos mayores de 100

//ARROW FUNCTION
const result5 = carrito.filter(producto => producto.precio > 100);
console.log("result5", result5);

//NORMAL
const resultado6 = carrito.filter(function(producto){
    return producto.nombre === "Tablet";  //ver si hay un producto con el nombre : Tablet
});
console.log(resultado6);  // devuelve todos los productos que tenga el nombre : Tablet

//ARROW FUNCTION
const result6 = carrito.filter(producto => producto.nombre === "Tablet")
console.log(result6);

// SWITCH   video 129

const metodoPago = "efectivo";

switch(metodoPago) {
    case "tarjeta":
        console.log("Pagaste con tarjeta");
        break;
    case "cheque":
        console.log("Pagaste con cheque");
        break;
    case "efectivo":
        console.log("Pagaste con efectivo");
        break; 
    default:
        console.log("Aún no pagaste nada");
        break;   
}

//FOR LOOP   video 130

for (let i = 0 ; i < 10; i++) {
    console.log("los numeros hasta el 10", i);
}
for (let x = 0  ; x < 10; x++) {
    if (x % 2 === 0) {
        console.log("los números son PARES", x);
    }else {
        console.log("los números son IMPARES", x);
    }
}

// EJEMPLO FOR CON CARRITO

//indice;condicion;incremento
for(let c = 0; c < carrito.length; c++) {
    console.log(carrito[c]);
    console.log(carrito[c].nombre);
    console.log(carrito[c].precio);
}

//WHILE LOOP  (si no se cumple la condición no se ejecuta el código) video 131
let h = 0;              // indice
while (h < 10) {        //condicion
    console.log("h", h);
    h++;                //incremento
}

//DO WHILE LOOP  (el código se ejecuta siempre una vez aunque no se cumpla la condición) video 131

let g = 0; 
do{
    console.log("g", g);
    g++;

}while(g < 10);


//foreach  (solo para arrays)  video 132
    //Function NORMAL
    carrito.forEach(function(producto){
        return console.log("normal", producto, producto.nombre);
    });
    //Arrow function
    carrito.forEach(producto => console.log("arrow", producto, producto.nombre));


//map  (solo para arrays)   video 132
carrito.forEach(producto => console.log("arrow", producto, producto.nombre));

//DIFERENCIA ENTRE forEach y map,  LA SINTAXIS ES LA MISMA
// forEach() solo muestra en consolo y en html  (SI QUEREMOS ITERAR Y MOSTRAR EN PANTALLA)
// map() para crear un nuevo array con los nuevos valores que quieres guardar (SI QUEREMOS FILTRAR POR NOMBRE O POR PRECIO Y GUARDAR EN NUEVO ARRAY)
//VER TODOS LOS EJEMPLOS (quitamos console.log() para ver resultados y ver la diferencia)

    const array1 = carrito.forEach(producto => (producto.nombre));    //undefined
    const array2 = carrito.map(producto => (producto.nombre));        // guarda producto.nombre 

    console.log("array 1 ", array1);
    console.log("array 2 ", array2);

    carrito.forEach(producto => console.log("arrow2", producto.nombre));    // para ver resultado poner console,log()    

//this  Video 133

//window.nombre = "un nombre"; // esto hace referencia si hacemos arrow function 
const reservacion = {
    nombre: 'barbara',
    apellidos: 'martin brown',
    total: 5000,
    pagado: false,
    informacion: function(){  // si usamos arrow function hace referencia a windows global
        //this hace refencia al objeto, en este caso hay que usar la palabra reservada function
        console.log(`El cliente ${this.nombre} reservó ${this.total}`)
    }
}
reservacion.informacion();


//Object Literal  video 134
const producto = {
    nombre: "Tablet",
    precio: 500
}

//Objet Constructor   video 134
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;

}
function Cliente(nombre, apellidos){
    this.nombre = nombre;
    this.apellidos = apellidos;
}
const producto2 = new Producto("Monitor 49 pulgadas", 800);
const cliente2 = new Cliente("pepe", "perez");
console.log(producto2);

//Prototypes  video 135   (No se usa mucho, sería ahora las clases)

//Crear funciones específica de cada objecto constructor
//La misma función formaterProducto no sirve para el cliente ya que no tienen los mismos parámetros
//Se tiene que crear distintas funciones
function formatearProducto(producto){
    return `El Producto ${producto.nombre} tiene un precio de ${producto.precio}€`;
}
function formatearCliente(cliente){
    return `El nombre del cliente es: ${cliente.nombre} y sus apellidos son ${cliente.apellidos}`;
}

console.log(formatearProducto(producto2));
console.log(formatearCliente(cliente2));

//Para saber que función usar se hace con Prototypes
//Tenemos los objetos Producto y Cliente
// see crean los siguientes Prototypes
//Le cambio el nombre de la función para que se colapse con la anterior

//El prototype tiene que llamarse igual que el objeto constructor (Producto)
Producto.prototype.formatearProducto2 = function(){  
    //y hay que hacer referencia al this (producto.nombre => this.nombre)
    return `El Producto ${this.nombre} tiene un precio de ${this.precio}€`;
}
//El prototype tiene que llamarse igual que el objeto constructor (Producto)
Cliente.prototype.formatearCliente2 = function(){
    //y hay que hacer referencia al this (cliente.nombre => this.nombre)
    return `El nombre del cliente es: ${this.nombre} y sus apellidos son ${this.apellidos}`
}

const producto3 = new Producto("LapTop", 300);
const cliente3 = new Cliente("lolo", "lopez");
// La forma de llamar a la función también cambia
console.log(producto3.formatearProducto2());
console.log(cliente3.formatearCliente2());


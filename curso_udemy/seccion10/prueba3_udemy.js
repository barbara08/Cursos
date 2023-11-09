//Clases    video 136

class Producto {
    constructor(nombre, precio){ // En el constructor se pasa todos los parámetros
        this.nombre = nombre;
        this.precio = precio;
    }
    // A partir de aquí se pasan las funciones que son los métodos de la clase
    formatearProducto(){
        return `El Producto ${this.nombre} tiene un precio de ${this.precio}€`;
    }
    obtenerPrecio(){
        return `El precio del producto ${this.nombre} es de: ${this.precio}€`;
    }
}

const producto2 = new Producto("Monitor 49 pulgadas", 800);
const producto3 = new Producto("LapTop", 300);

console.log(producto2);
console.log(producto3);
console.log("Método formatearProducto de la clase Producto:", producto2.formatearProducto());
console.log("Método obtenerPrecio de la clase Producto:", producto2.obtenerPrecio());

//Herencia  video 137
//Creamos otra clase
//Vamos a heredar el nombre y precio de la clase Producto
class Libro extends Producto{  //Hereda también los métodos
    constructor(nombre, precio, isbn){
        super(nombre, precio); // con super coge todos los parámetros de la clase Producto
        this.isbn = isbn;  // de los parámetros que no existen hay que declararlas
    }
    //Creamos el mismo método para poder añadir los nuevos paraámetros
    formatearProducto(){
        //return `El Producto ${this.nombre} tiene un precio de ${this.precio}€ y su ISBN es: ${this.isbn}`;
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;
    }
} 

const libro = new Libro("JS la revilución", 120, "125458425157895");
console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());


// Try Cath  video 138
//Solo se debe usar en casos específicos

const numero1 = 10;
const numero3 = 30;
//const mensajeError = "NO ESTÁ DEFINIDO";

console.log(numero1);
try {
    console.log(numero2);

}catch(e) {
    console.log(e);

}
console.log(numero3);


//Promise    video 139

const usuaroAutenticado = new Promise( (resolve, reject) => {
    const auth = false;

    if (auth) {
        resolve("Usuario Autenticado");  //Se cumple la Promise
    }else{
        reject("No se pudo iniciar sesión"); //No se cumple Promise
    }
});
//
//DOS FORMAS de crear las funciones

// PARTE CORTA (función flecha)
usuaroAutenticado
    .then(resultado => console.log(resultado)) // NO poner ; //Saldrá el mensaje de resolve del if
    .catch(error => console.log(error));  //Saldrrá el mensaje de reject del else 

//PARTE LARGA
usuaroAutenticado
    .then(function (resultado) {    
        console.log(resultado); 
    })  // NO poner ; ya que si no NO coge el siguiente código (cath)
    .catch(function (error){
        console.log(error);
    });

//En los promises hay 3 estados
//Pending : No se ha cumplido pero tampoco se ha rechazado
//Fulfilled : Se ha cumplido
//Rejected : Se ha rechazado o no se pudo cumplir


// Notification API   video 140

//Notificación cuando alguien sube algo (por ej)
const boton = document.querySelector('#boton');

//Se le pasa dos parámetros: (click, funcion)
//para Notification (que es una función) ya usa resolve y reject
boton.addEventListener(click, ()=> {
    //Cuando haga click, el usuario nos da permiso
    Notification.requestPermission()
        .then(resultado => console.log("El resultado es: ", resultado))
})

if(Notification.permission == "granted"){
    new Notification("Esta es una notificación", {
       //icon: img,   SI QUIERES PONER UNA IMAGEN
        body: "Código de Juan, los mejores tutoriales"

    })
}







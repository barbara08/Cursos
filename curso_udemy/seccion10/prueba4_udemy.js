//Async / Await     video 141

//Primero hemos creado un Promise
function descargarNuevosClinetes() {
    return new Promise(resolve => {
        console.log("Descargando clientes... espere...");

        setTimeout(() => {
            resolve("Los clientes fueron descargados");
        }, 5000);
    });
}

//Para sync/await creamos la función app()
//Lo usaremos cuando solo sea una consulta
async function app(req, res) {
    //try cath  ya que puede que se descarguen o no los clientes
    try{
        const resultado = await descargarNuevosClinetes();
        console.log("Este código SI se bloquea");
        console.log(resultado);

    }catch(e){
        console.log(e);
    }
}

app();
console.log("Este código NO se bloquea");

// Trabajar con 2 consultas async/await    video 142

//Usaremos también la función de clientes
//Creamos otra función de pedidos
function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log("Descargando pedidos... espere...");

        setTimeout(() => {
            resolve("Los pepidos fueron descargados");
        }, 3000);
    });
}

async function app2(req, res) {
    try{
        /*  // De esta forma no se ejecuta todo a la vez, sino que 
            // primero se ejecuta el de clientes, esperamos los 5 segundos
            // después se ejecuta los pedidos
        const clientes = await descargarNuevosClinetes();
        const pedidos = await descargarUltimosPedidos();
        console.log(clientes);
        console.log(pedidos);
        */
       // Se debe ejecutar las dos consultas a la vez
       // Se hace con la función promise.all() y se guarda en un array
       const resultado = await Promise.all([descargarNuevosClinetes(), descargarUltimosPedidos()]);
       console.log(resultado[0]);
       console.log(resultado[1]);
    }catch(e){
        console.log(e);
    }
}

app2();




//Ejemplo de estas dos funciones
/*
setTimeout(function(){
    console.log("set timeout...");
}, 3000); //3 segundos y se ejecuta una sola vez

setInterval(function(){
    console.log("set interval...");
}, 5000); //5 segundos y se ejecuta cada 5 segundos
*/
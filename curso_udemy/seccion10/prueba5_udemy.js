// Fetch API    video 143
//DOS formas de hacerla con Promises y con async/away

//Función con Promise
function obtenerEmpleados(){
    
    const archivo = "empleados.json";

    fetch(archivo) //se pasa un archivo o una URL
        .then(resultado => resultado.json())
        .then(datos => {
            //console.log(datos);
            //console.log(datos.empleados);

            //Podemos aplicar destructure para extraer el valor de empleados (datos) y crear la variable (empleados)en la misma linea
            const { empleados } = datos
            //console.log(empleados);
            
            //Para iterar haremos forEach y se verá cada una de forma independiente
            empleados.forEach( empleado => {
                console.log(empleado);
                // console.log(empleado.id);
                //console.log(empleado.nombre);
                //console.log(empleado.puesto)
            });
        })
}

obtenerEmpleados();

//Función con asuync/await  (código más corto)
async function obtenerEmpleados2(){
    
    const archivo2 = "empleados.json";

    const resultado2 = await fetch(archivo2);
    const datos2 = await resultado2.json();
    console.log("datos2", datos2);    
}

obtenerEmpleados2();
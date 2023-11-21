<?php include 'includes/header.php';

//VIDEO 265
$carrito = ['Tablet', 'Televisión', 'Computadora'];
var_dump(in_array("Tablet", $carrito));
var_dump(in_array("Audifono", $carrito));

//Ordenar elementos de un array
$numeros = array(1,3,4,2,1);
sort($numeros); // de menor a mayor
rsort($numeros); // de mayor a menor

//útil para ver los contenidos de un array
echo "<pre>";  // Etiqueta <pre> Para que se visualice mejor el resultado
var_dump($numeros);
echo "</pre>";
echo "<br>";

//Ordenar array asociativos
$cliente = array(
    "saldo" => 200,
    "tipo" => "premium",
    "nombre" => "Juan"
);
asort($cliente); // ordena por valores (por orden alfabéticos, primero los números)
arsort($cliente); // ordena por valores (por orden alfabéticos pero al revés)

//útil para ver los contenidos de un array
echo "<pre>";  // Etiqueta <pre> Para que se visualice mejor el resultado
var_dump($cliente);
echo "</pre>";
echo "<br>";

ksort($cliente); // ordena por llaves (por orden alfabéticos)
krsort($cliente); // ordena por llaves (por orden alfabéticos pero al revés)  

//útil para ver los contenidos de un array
echo "<pre>";  // Etiqueta <pre> Para que se visualice mejor el resultado
var_dump($cliente);
echo "</pre>";
echo "<br>";


include 'includes/footer.php';
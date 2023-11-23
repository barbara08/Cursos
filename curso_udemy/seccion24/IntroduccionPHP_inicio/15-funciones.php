<?php 

declare(strict_types=1);  //Con esto se asegura que los parámetross se pasan correctos
include 'includes/header.php';

//VIDEO 270
function sumar($n1, $n2) {
    echo $n1 + $n2;
}
sumar(10,20);
echo "<br>";

//Si no se pasa otro parámetro por defecto sumará con 0 
function sumar1($n1 = 0, $n2 = 0) {
    echo $n1 + $n2;
}
sumar1(10);
echo "<br>";

function sumar2(int $n1 = 0, int $n2 = 0) {
    echo $n1 + $n2;
}
//Esto dará error por lo que se puede poner tipo int en el parámetro
//También se puede añadir arriba declare
sumar2(10, "HOLA");
echo "<br>";

include 'includes/footer.php';
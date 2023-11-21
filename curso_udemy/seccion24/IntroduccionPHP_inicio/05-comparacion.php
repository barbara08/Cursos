<?php include 'includes/header.php';
//VIDEO 259
$numero1 = 20;
$numero2 = 30;
$numero3 = 30;
$numero4 = "30";

var_dump($numero1 > $numero2);
echo "<br/>";
var_dump($numero1 < $numero2);
echo "<br/>";
var_dump($numero1 >= $numero2);
echo "<br/>";
var_dump($numero1 <= $numero2);
echo "<br/>";
var_dump($numero2 == $numero3);
echo "<br/>";
var_dump($numero2 == $numero4);
echo "<br/>";
var_dump($numero3 === $numero4);
echo "<br/>";
// otros operadores
    // si el numero de la izq es mayor devuelve 1
    // si el numero de la izq es menor devuelve -1
    // si son iguales devuelve 0
var_dump($numero1 <=> $numero2);
echo "<br/>";
var_dump($numero2 <=> $numero3);
echo "<br/>";
var_dump($numero2 <=> $numero1);



include 'includes/footer.php';
<?php include 'includes/header.php';

//VIDEO 262

//ARRAY INDEXADOS (los que más se usan en php)
// $carrito = array();  También se puede crear de esta forma (no es muy usual)
// $carrito = array('Tablet', 'Televisión', 'Computadora');

$carrito = ['Tablet', 'Televisión', 'Computadora'];
echo "<pre>";  // Etiqueta <pre> Para que se visualice mejor el resultado
var_dump($carrito);
echo "</pre>";

echo "<br>";

//Acceder a un elemento del array
echo $carrito[1];
echo "<br>";

//Agregar un elemento
$carrito[3] = "Nuevo Producto";  // La desventaja es con esto hay que saber la longitud del array
echo "<br>";

echo "<pre>";  // Etiqueta <pre> Para que se visualice mejor el resultado
var_dump($carrito);
echo "</pre>";
echo "<br>";

//Añadir un elemento nuevo al final 
array_push($carrito, "Audífono");
echo "<br>";

//Añadir un elemento nuevo al inicio
array_unshift($carrito, "Smartwatch");
echo "<br>";

//útil para ver los contenidos de un array
echo "<pre>";  // Etiqueta <pre> Para que se visualice mejor el resultado
var_dump($carrito);
echo "</pre>";
echo "<br>";


//ARRAY ASOCIATIVOS video 263


include 'includes/footer.php';
<?php include 'includes/header.php';

//VIDEO 261

//Conocer la extension de un string
$nombreCliente = 'Bárbara';
echo strlen($nombreCliente);
echo "<br>";
echo var_dump($nombreCliente);

echo "<br>";

//Eliminar espacios en blanco delante y detrás del nombre
$nombreCliente1 = '   Bárbara   ';
$texto = trim($nombreCliente1);
echo strlen($texto);
echo "<br>";
echo var_dump($nombreCliente1);

echo "<br>";

// Convertirlo a mayúsculas
echo strtoupper($nombreCliente1);
echo "<br>";

// Convertirlo a minúsculas
echo strtolower($nombreCliente1);
echo "<br>";

// Ver como convertir a minúsculas para validar el correo (ejemplo)

$mail1 = "correo@correo.com";
$mail2 = "COrreo@correo.com";

var_dump($mail1 == $mail2);  // false
echo "<br>";
var_dump(strtolower($mail1) === strtolower($mail2));  // true
echo "<br>";

$nombreCliente3 = "Juan";
$nombreCliente4 = "   Juan";
//Reemplazar 
echo str_replace('Juan', 'J', $nombreCliente3); 
echo "<br>";

// Revisar si un str existe o no
//Mejor con Expresión Regular (próximos videos)
echo strpos($nombreCliente3,"Juan"); // Si existe aparece el número (de la posición en la que se encuentra)
echo "<br>";
echo strpos($nombreCliente4,"Juan"); // Si existe aparece el número (de la posición en la que se encuentra)
echo "<br>";
echo strpos($nombreCliente3,"Pedro"); // No aparece nada 
echo "<br>";

//Concatenar (2 formas)
$tipoCliente = "Premium";
echo "El cliente " . $nombreCliente . " es " . $tipoCliente;
echo "<br>";
echo "El cliente {$nombreCliente} es {$tipoCliente}"; // Tiene que ser comillas dobles

include 'includes/footer.php';
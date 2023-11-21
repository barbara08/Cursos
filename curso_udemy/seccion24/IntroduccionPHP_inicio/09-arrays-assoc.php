<?php include 'includes/header.php';
// VIDEO 263
//Array Asociativo

$cliente = [
    'nombre' => 'Juan',
    'saldo' => 200,
    'informacion' => [
        'tipo' => 'premium'
    ]
];

//útil para ver los contenidos de un array
echo "<pre>";  // Etiqueta <pre> Para que se visualice mejor el resultado
var_dump($cliente);
echo "</pre>";
echo "<br>";

//Hay que acceder por la propiedad y no por su índice
echo $cliente["nombre"]; 
echo "<br>";
echo $cliente["informacion"]["tipo"]; 

//Agregar propiedades
$cliente["codigo"] = 125425158;
// $cliente["nombre"] = 125425158;  Esto sobre escribe el nombre

echo "<pre>";  // Etiqueta <pre> Para que se visualice mejor el resultado
var_dump($cliente);
echo "</pre>";





include 'includes/footer.php';
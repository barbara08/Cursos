<?php include 'includes/header.php';

//VIDEO 264
// EMPTY E ISSET => DEVUELVE BOOLEAN

$cliente = [];
$cliente2 = array();
$cliente3 = array('Juan', 'Pedro', 'Karen');
$clientes = [
    "nombre" => "Paco",
    "saldo" => 200
];

//Empty - Revisa si array está vacío  
var_dump(empty($cliente));
var_dump(empty($cliente2));
var_dump(empty($cliente3));
echo "<br>";

//Isset - Revisa si array está creado o una propiedad está definida
var_dump(isset($cliente4));
var_dump(isset($cliente));
var_dump(isset($cliente2));
var_dump(isset($cliente3));
echo "<br>";

//Isset - permite revisar si una propiedad de un array asociativo existe
var_dump(isset($clientes["nombre"]));
var_dump(isset($clientes["codigo"]));



include 'includes/footer.php';
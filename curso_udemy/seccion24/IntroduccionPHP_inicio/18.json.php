<?php include 'includes/header.php';

$productos = [
    [
        "nombre" => "Tablet",
        "precio" => 200,
        "disponible" => true
    ],
    [
        "nombre" => "Televisión 24",
        "precio" => 300,
        "disponible" => true
    ],
    [
        "nombre" => "Monitor Curvo",
        "precio" => 400,
        "disponible" => false
    ]
];

echo "<pre>";
var_dump($productos);
$json = json_encode($productos);

var_dump($json);
echo "</pre";

include 'includes/footer.php';
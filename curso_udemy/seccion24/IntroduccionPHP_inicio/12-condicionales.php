<?php include 'includes/header.php';

//VIDEO 266

$autenticado = true;
//$autenticado = false;

if($autenticado){
    echo "Usuario autenticado correctamente";
}else{
    echo "Usuario no autenticado, inicia sesión";
}
echo "<br>";

$autenticado1 = true;
//$autenticado1 = false;
$admin = false;

if($autenticado1 || $admin){
    echo "Usuario autenticado correctamente";
}else{
    echo "Usuario no autenticado, inicia sesión";
}
echo "<br>";

//$autenticado2 = false;
$autenticado2 = true;
$admin2 = true;

if($autenticado2 && $admin2){
    echo "Usuario autenticado correctamente";
}else{
    echo "Usuario no autenticado, inicia sesión";
}
echo "<br>";

// if anidados

//Si no está vacío
$cliente = [
    "nombre" => "Bárbaran",
    "saldo" => 200,
    "informacion" => [
        "tipo" => "premium"
    ]
];

if(empty($cliente)){
    echo "El array de cliente está vacío";
}else{
    echo "El array de cliente no está vacío";
}
echo "<br>";

//si está vacío
$clientes = [];

if(empty($clientes)){
    echo "El array de clientes está vacío";
}else{
    echo "El array de clientes no está vacío";
}
echo "<br>";

//Se puede negar también, hacer la pregunta al revés
if(!empty($cliente)){
    echo "El array de cliente no está vacío";
    echo "<br>";

    if($cliente["saldo"] > 0){
        echo "El cliente tiene saldo disponible";
    }else{
        echo "No hay saldo";
    }
}
echo "<br>";

// else if
if($clientes["saldo"] > 0){
    echo "El cliente tiene saldo disponible";
}else if($clientes["informacion"]["tipo"] === "premium"){
    echo "El cliente es premium";
}else{
    echo "No hay cliente definifido o no tiene saldo o no es premium";
}
echo "<br>";

//switch
//$tecnologia = "PHP";
//$tecnologia = "HTML";
$tecnologia = "";

switch ($tecnologia){
    case "PHP":
        echo "PHP, un excelente lenguaje";
        break;
    case "JS":
        echo "JS, el lenguaje de la web";
        break;
    case "HTML":
        echo "HTML, emmm...";
        break;
    default:
        echo "Algún lenguaje, no se cual es";
        break;
}




include 'includes/footer.php';
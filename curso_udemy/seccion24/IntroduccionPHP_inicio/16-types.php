<?php 

declare(strict_types=1);
include 'includes/header.php';

//VIDEO 271
//Después de los : se puede declarar el tipo de valor que quieras que se devuelva
function usuarioAutenticado(bool $autenticado) : string|int {
    if($autenticado){
        return "El usuario está autenticado.";
    }else{
        return 20;
        //return "El usuario NO está autenticado.";
    }
};

$usuario = usuarioAutenticado(false);
echo $usuario;


include 'includes/footer.php';
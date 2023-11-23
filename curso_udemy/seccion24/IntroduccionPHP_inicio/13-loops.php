<?php include 'includes/header.php';
//VIDEO 267

//while  => Evalúa 1º la condición y si se cumple ejecuta el código
$i = 0; //Inicializador
while($i < 10){
    echo $i."<br>";
    $i++;  //Incremento
}
// También se puede quitar las llaves en while, for, if //VIDEO 268
// Sería de esta forma:
    //Para while
    //Para for y para if (ver más abajo DEL VIDEO 268)
// while($i < 10):
//    echo $i."<br>";
//    $i++;  //Incremento
// endwhile;

echo "<br>";

//do while => Ejecuta el código 1º y después evalúa la condición
$i = 0;
do{
    echo $i."<br>";
    $i++; //incremento
}while($i < 10);

echo "<br>";

// for loop (más complicado)

for($i = 0; $i < 10; $i++){
    echo $i."<br>";
}
echo "<br>";
/*
Múltiplo de 3 => imprimir FIZZ
Múltiplo de 5 => imprimir BUZZ
Múltiplo de 3 y 5 => imprimir FIZZ BUZZ 
**/

for($i = 0; $i < 100; $i++){
    if($i % 5 === 0){
        echo $i . "- BUZZ <br>";
    }else if($i % 3 === 0){
        echo $i . "- FIZZ <br>";
    }else if($i % 3 === 0 && $i % 5 === 0){
        echo $i . "- FIZZ BUZZ <br>";
    }
}
echo "<br>";

for($i = 0; $i < 100; $i++){
    if($i % 3 === 0 && $i % 5 === 0){
        echo $i . "- FIZZ BUZZ <br>";
    }else if($i % 3 === 0){
        echo $i . "- FIZZ <br>";
    }else if( $i % 5 === 0){
        echo $i . "- BUZZ <br>";
    }else{
        echo $i."<br>";
    }
}
echo "<br>";

//VIDEO 268
// DOS FORMAR DE RECORRER ARRAY

$clientes = array("Juan", "Pedro", "Karen");
//foreach
//1º array y después un alias (el nombre suele ser parecido al array)
//foreach recorre el array hasta el último elemento (no hace falta saber su extensión)
foreach($clientes as $cliente){
    echo $cliente . "<br>";
}
echo "<br>";

//for 
//debe conocer su extensión, se puede hacer con count() o con 
for($i = 0; $i < count($clientes); $i++){
    echo $clientes[$i] . "<br>";
}
echo "<br>";

$cliente = [
    "nombre" => "Juan",
    "saldo" => 200,
    "tipo" => "premium"
];
foreach($cliente as $key => $valor){
    echo $key . " - " . $valor . "<br>";
}



echo "<br>";
//Formas para quitar las lleves en for y en if
for($i = 0; $i < 100; $i++):
    if($i % 3 === 0 && $i % 5 === 0):
        echo $i . "- FIZZ BUZZ <br>";
    elseif($i % 3 === 0):  //elseif debe ir juntos
        echo $i . "- FIZZ <br>";
    elseif( $i % 5 === 0):
        echo $i . "- BUZZ <br>";
    else:
        echo $i."<br>";
    endif;
endfor;


include 'includes/footer.php';
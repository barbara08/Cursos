<?php include 'includes/header.php';

//VIDEO 269
//SIMULANDO BBDD

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
//PHP EN HTML
                                // CIERRO PHP para crear html
foreach($productos as $producto){ ?>
<!--Dentro de la etique creamos código PHP -->
<li>
    <p>Producto: <?php echo $producto["nombre"]; ?></p>
    <p>Precio: <?php echo $producto["precio"]; ?></p>
    <!-- Operador ternario 
                ()?      :     
                (aquí va if) ?  aqui si se cumple : si no se cumple -->
    <p><?php echo ($producto["disonible"]) ? "Disponible" : "No disponible" ?> </p>
    
    <!-- ABRIMOS PHP para evaluar la parte de disponible, menos usado, 
    se usa el operador ternario arriba puesto -->
    
    <?php 
        if ($producto["disponible"]) {
            echo "<p> Disponible </p>";
        }else{
            echo "<p> No Disponible </p>";
        }
    ?>
    
</li>
    
<!--VUELVE  ABRIR  PHP -->
<?php 
}

include 'includes/footer.php';
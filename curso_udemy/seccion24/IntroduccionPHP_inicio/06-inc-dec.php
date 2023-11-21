<?php include 'includes/header.php';
//VIDEO 260

//INCREMENTAR
$numero1 = 30;
echo $numero1++; // no va a sumar 1 ya que está declarado destrás del número

echo "<br/>";

$numero2 = 40;
$numero2++;
echo $numero2; //va a sumar 1 ya que se ha declarado el + antes de imprimir

echo "<br/>";

$numero3 = 50;
echo ++$numero3; //va a sumar 1 ya que se ha declarado el + antes del número

echo "<br/>";

//DECREMENTAR
$numero4 = 30;
echo $numero4--; // no va a restar 1 ya que está declarado destrás del número

echo "<br/>";

$numero5 = 40;
$numero5--;
echo $numero5; //va a restar 1 ya que se ha declarado el + antes de imprimir

echo "<br/>";

$numero6 = 50;
echo --$numero6; //va a restar 1 ya que se ha declarado el + antes del número








include 'includes/footer.php';
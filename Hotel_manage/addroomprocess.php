<?php
 require_once 'adminfunction.php';
 $roomnuber = $_POST['rnumber'];
 $roomprice = $_POST['price'];
 $roomtype = $_POST['rtype'];
 $roomcond = $_POST['roomcondition'];
 $uploadername = $_POST['name'];
 $quantity = $_POST['quantity'];
 $image = $_FILES['image']['name'];

$room= new adminmethod;
$room->addRoom($roomnuber, $roomprice, $roomtype, $roomcond, $uploadername, $quantity, $image);



?>
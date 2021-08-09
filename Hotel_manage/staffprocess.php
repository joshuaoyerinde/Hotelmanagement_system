<?php
    header("Access-Control-Allow-Origin: http://localhost:4300");
    require_once 'adminfunction.php';
    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $designation = $_POST['designation'];

    $roll = new adminmethod;
    $roll->staffReg($fname, $lname, $email, $phone, $address, $designation);

?>
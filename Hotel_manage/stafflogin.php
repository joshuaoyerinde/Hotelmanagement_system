<?php
    require_once 'adminfunction.php';
    $username = $_POST['email'];
    $staff_pass = $_POST['pass'];
    
    $staffLog = new adminmethod;
    $staffLog->staffLogin($username,$staff_pass);


?>
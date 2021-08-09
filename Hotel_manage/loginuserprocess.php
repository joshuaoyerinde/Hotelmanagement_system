<?php
    require_once 'functions.php';
    // require ('../vendor/autoload.php');
    $useremail = $_POST['email'];
    $userpassword = $_POST['password'];

    $cutomerlog = new functions;
    $cutomerlog->login($useremail,$userpassword);
?>
<?php
    require_once 'adminfunction.php';
    $uname = $_POST['email'];
    $pass = $_POST['pass'];    
    $admlog = new adminmethod;
    $admlog->adminLogin($uname, $pass);
?>
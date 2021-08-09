<?php
    // require "db.php";
    require_once "functions.php";
    // $_POST=json_decode(file_get_contents('php://input'),true);
    $customerfullname = $_POST['fullname'];
    $customerphone = $_POST['phone'];
    $customeraddress = $_POST['adderess'];
    $customeremail = $_POST['email'];
    $customerpass = $_POST['password'];
    
    $b = new functions;
    $b->signUp($customerfullname, $customerphone, $customeraddress, $customeremail, $customerpass);
?>
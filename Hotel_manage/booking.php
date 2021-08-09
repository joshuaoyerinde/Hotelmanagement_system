<?php
    require_once 'functions.php';
    $roomid = $_POST['rid'];
    $roomprice = $_POST['rprice'];
    $roomtype = $_POST['rtype'];
    $roomnum = $_POST['rnum'];
    $checkin = $_POST['checkin'];
    $checkout = $_POST['checkout'];
    $cutomer_id = $_POST['customerid'];
    $pricedue = $_POST['pricedue'];   
    $postBooked = new functions;
    $postBooked-> booking($roomid, $roomprice, $roomtype, $roomnum, $checkin, $checkout, $cutomer_id, $pricedue);
?>
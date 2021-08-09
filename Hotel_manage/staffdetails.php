<?php
    require_once 'adminfunction.php';
    $staffdetails = new adminmethod;
    $res = $staffdetails->fetchStaff();
    echo json_encode($res);
?>
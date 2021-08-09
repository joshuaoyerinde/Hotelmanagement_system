<?php

    require 'adminfunction.php';
    $_POST=json_decode(file_get_contents('php://input'),true);

    $id = $_POST['id'];
    $roomDelete = new adminmethod;
    $response = $roomDelete->removeRoom($id);
    echo json_encode($response);

?>
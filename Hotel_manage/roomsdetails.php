<?php
    require_once 'adminfunction.php';

    $roomdetails = new adminmethod;
    $fetch = $roomdetails->fetchingOfRooms();
    echo json_encode($fetch);


?>
<?php

require_once "adminfunction.php";

$booked = new adminmethod;
$dd = $booked->fetchBooking();
echo json_encode($dd);
?>
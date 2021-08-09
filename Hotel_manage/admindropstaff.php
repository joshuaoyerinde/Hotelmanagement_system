<?php
require_once 'adminfunction.php';
$_POST=json_decode(file_get_contents('php://input'),true);
$staffId = $_POST['id'];

$getstaffid = new adminmethod;
$dd = $getstaffid->removeStaff($staffId);
echo json_encode($dd);

?>
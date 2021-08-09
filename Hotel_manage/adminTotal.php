<?php
  require_once 'adminfunction.php';
    $ff = new adminmethod;
    $result = $ff->totalFetched();
    echo json_encode($result);

?>
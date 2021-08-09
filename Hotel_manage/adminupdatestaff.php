<?php
    require_once 'adminfunction.php';
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $designation = $_POST['role'];
    $id = $_POST['id'];

    $update_Details = new adminmethod;
   $res  = $update_Details->updateStaffBio($fname,$lname,$email,$phone,$address,$designation, $id);

   if ($res) {
       $arrayName = array('success' => true);
   }else {
       $arrayName =  array('fail' => false);
   }
   echo json_encode($arrayName);
?>
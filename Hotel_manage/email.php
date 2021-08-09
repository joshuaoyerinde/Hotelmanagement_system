<?php
include 'db.php';



$curl = curl_init();
  
  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.paystack.co/transaction/verify/2dx6nx5xyn",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "Authorization: Bearer sk_test_5b4890a6dc34fba3a5e2f7cf4ab5806900fc1013",
      "Cache-Control: no-cache",
    ),
  ));
  
  $response = curl_exec($curl);
  $err = curl_error($curl);
  curl_close($curl);
  
  if ($err) {
    echo "cURL Error #:" . $err;
  } else {
    echo $response;
  }
  // $url = "https://api.paystack.co/transaction/initialize";
  // $fields = [
  //   'email' => "oyerindejoshua133@email.com",
  //   'amount' => "20000",
  //   'exp_month' => "05",
  //   'exp_year' => "2023",
  // ];
  // $fields_string = http_build_query($fields);
  // //open connection
  // $ch = curl_init();
  
  // //set the url, number of POST vars, POST data
  // curl_setopt($ch,CURLOPT_URL, $url);
  // curl_setopt($ch,CURLOPT_POST, true);
  // curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
  // curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  //   "Authorization: Bearer sk_test_5b4890a6dc34fba3a5e2f7cf4ab5806900fc1013",
  //   "Cache-Control: no-cache",
  // ));
  
  // //So that curl_exec returns the contents of the cURL; rather than echoing it
  // curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
  
  // //execute post
  // $result = curl_exec($ch);
  // echo  $result;



?>
<?php
include 'db.php';

class payment extends hotel
{
  public function payCharges()
  { 
    $this->__daTaBase();
    $postpay = json_decode(file_get_contents('php://input'),true);
    // $cardnum = $postpay["cardnumber"];
    // $security = $postpay['securitycode'];
    // $name = $postpay["name"];
    // $expm = $postpay["epiredmonth"];
    // $expyrs = $postpay["year"];
    $uerid = 1;

    $query = $this->conn->prepare("SELECT * FROM book_tb JOIN customer_reg_tb USING(customer_id) WHERE customer_id = $uerid");
    $query->execute();
    $fetch = $query->get_result();
    $getresult = $fetch->fetch_assoc();
    $email = $getresult['customer_email'];
    $price = $getresult['price_due'];
    $phone = $getresult['customer_phone'];
    $name = $getresult['customer_fullname'];

    // foreach ( $getresult as $value) {
    //     echo $value['customer_email'] . $value['price_due'];
    // }
    // echo  json_encode($getresult);

    # code... for the payment
    $url = "https://api.paystack.co/transaction/initialize";
    $fields = [
      'email' => "$email",
      'amount' => "$price",
      'last4' => "$cardnum",
      // 'exp_month' => "$expm",
      // 'exp_years' => "$expyrs",
      'phone'=> "$phone",
      'first_name'=>"$name"
    ];
    $fields_string = http_build_query($fields);
    //open connection
    $ch = curl_init();
    
    //set the url, number of POST vars, POST data
    curl_setopt($ch,CURLOPT_URL, $url);
    curl_setopt($ch,CURLOPT_POST, true);
    curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
      "Authorization: Bearer sk_test_5b4890a6dc34fba3a5e2f7cf4ab5806900fc1013",
      "Cache-Control: no-cache",
    ));
    
    //So that curl_exec returns the contents of the cURL; rather than echoing it
    curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
    
    //execute post
    $result = curl_exec($ch);
    echo $result;
    }
}
$nn = new payment;
$nn->payCharges();
 

?>

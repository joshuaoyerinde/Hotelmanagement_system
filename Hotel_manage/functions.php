<?php
    include 'db.php';
    class functions extends hotel
    {
        public $checkuser;
        public $result;
        public $username;
        // public $inserBook;
    public function signUp($a, $b, $c, $d, $e){
            $this->__daTaBase();
            // $body = '<h2>Dilux-Hotel</h2><div>On behalf of our entire staff, we would like to welcome you to our property.<br> We are honored that you have chosen to stay with us and look forward to providing you with a memorable experience.</div>';
            // $this->sendMailer($d);
            $this->statement = $this->conn->prepare("INSERT INTO `customer_reg_tb`(`customer_fullname`, `customer_phone`, `customer_address`, `customer_email`, `customer_password`) VALUES (?,?,?,?,?)");
            $this->statement->bind_param('sssss',$a, $b, $c, $d, $e);
            if ($this->statement->execute()) {
                $arrayName = array('success' => true);
            }
            else{
                $arrayName = array('success' => false);
            }
            echo json_encode($arrayName);
    }
    // login function
    public function login($email,$pass){
            $this->__daTaBase();
            $this->jwtAuth($email);
            $this->checkuser = $this->conn->prepare("SELECT customer_id, customer_email, customer_password FROM customer_reg_tb WHERE customer_email = ? AND customer_password= ?");
            $this->checkuser->bind_param('ss', $email,$pass);
            $this->checkuser->execute();
            $this->result = $this->checkuser->get_result();
            $this->username = $this->result->fetch_assoc(); 
            $customerUserName = $this->username['customer_email'];
            $customer_id = $this->username['customer_id'];
            // $this->decodeAuth($this->username['customer_email']);
            if($this->result->num_rows > 0){
                // 'token2'=> $this->dec    odeAuth($this->username['customer_email'])
                $resp = array('success' => true,  'username'=>$customerUserName, 'token'=>$this->jwtAuth($email),'userId'=> $customer_id);
            }else{
                $resp = array('fail' => false,'errormsg'=>'Invalid details');
            }
            echo json_encode($resp);
    }

    // booking method for customers
    public function booking($roomid, $roomprice, $roomtype, $roomnum, $checkin, $checkout, $cid, $pricedue){
        $this->__daTaBase();
        $this->decodeAuth();
        $status = 'occupied';
        $this->statebook = $this->conn->prepare("INSERT INTO book_tb(rooms_id, price, room_type, room_number, checkin_date, checkout_date, customer_id, price_due, status) VALUES (?,?,?,?,?,?,?,?,?)");
        $this->statebook->bind_param('ssssssiss',$roomid, $roomprice, $roomtype, $roomnum, $checkin, $checkout, $cid, $pricedue, $status);
        if ($this->statebook->execute()) {
            $this->stateupdate = $this->conn->prepare("UPDATE room_tb SET status = '$status' WHERE rooms_id = ?");            
            $this->stateupdate->bind_param('i',$roomid);
            $this->stateupdate->execute();
            $arrayBookresp = array('success' => true);

        }else {
            $arrayBookresp = array('success' => false);
        }
        echo json_encode($arrayBookresp);   
    }
    // booking method end here
   
}

   
?>
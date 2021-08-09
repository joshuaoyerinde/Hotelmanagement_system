<?php
    include 'db.php';
    class adminmethod extends hotel
    {
        public $staff;
        public $addroom;
        public $adminLogin;
        public $result;
        public $staffLogin;
        // registration of staffs
        public function staffReg($fname, $lname, $em, $phone, $add, $designation){
            $this->__daTaBase();
            $token = mt_rand(1000,9999);
            $this->statement = $this->conn->prepare("INSERT INTO `staff_tb`(`first_name`, `last_name`, `email`, `phone`, `adderess`,`role_id`,`token`) VALUES (?,?,?,?,?,?,?)");
            $this->statement->bind_param('ssssssi',$fname, $lname, $em, $phone, $add, $designation,  $token);      
            if ($this->statement->execute()){
                $arrayName = array('success' => true, 'msg'=>'Staff added successfully');
            }else{
                $arrayName = array('fail' => false);
            }
            echo json_encode($arrayName);
        }

        //....... adding of rroms function
        public function addRoom($rn, $rp, $rtype, $rcond, $name, $quantity, $image){
            $this->__dataBase();
            $status = 'Available';
            // Valid file extensions
            $valid_extensions = array("jpg","jpeg","png","pdf");
            // File extension
            $extension = pathinfo($image, PATHINFO_EXTENSION);
            if (in_array(strtolower($extension),$valid_extensions)) {
                if (move_uploaded_file($_FILES['image']['tmp_name'],"uploads/".$image)) {
                    $this->addroom = $this->conn->prepare("INSERT INTO room_tb(room_numner, price, room_type, room_condition, uploder_name, quantity, image, status) VALUES (?,?,?,?,?,?,?,?)");
                    $this->addroom->bind_param('ssssssss',$rn, $rp, $rtype, $rcond, $name, $quantity, $image,$status);
                    if ($this->addroom->execute()) {
                        $resp = array('success' => true, 'msg'=>'upload success fully');
                    }else{
                        $resp = array('fail' => fail, 'msg'=>'upload fail');
                    }
                    echo json_encode($resp);
                }
            }

        }
        // addind of rooms function end here...

        // .....C.e.O function............
        public function adminLogin($uname, $pass){
            $this->__dataBase();
            $tokenize = $this->jwtAuth($uname);
            $this->adminLogin = $this->conn->prepare("SELECT username, password FROM `admin_tb` WHERE username= ? AND password= ?");
            $this->adminLogin->bind_param('ss', $uname, $pass);
            $this->adminLogin->execute();
            $this->result = $this->adminLogin->get_result();
            $getname = $this->result->fetch_assoc();
            $adminname = $getname['username'];
           if($this->result->num_rows > 0){
                $resp = array('success' => true, 'tk'=> $tokenize,'adminname'=>$adminname);
           }else{
                $resp = array('fail' => false,'errormsg'=>'Invalid info');
           }
            echo json_encode($resp);

        }
        // ....staff login function..........
        public function staffLogin($username, $staff_pass)
        {
            $this->__dataBase();
            $notifyToken = $this->jwtAuth($username);
            $this->staffLogin = $this->conn->prepare("SELECT first_name, last_name, email, phone, role_id FROM staff_tb WHERE email =? AND first_name= ?");
            $this->staffLogin->bind_param('ss',$username,$staff_pass);
            $this->staffLogin->execute();
            $this->staffRes = $this->staffLogin->get_result();
           $this->getstatus = $this->staffRes->fetch_assoc();
            $status = $this->getstatus['role_id'];
            if($this->staffRes->num_rows > 0){
                $response = array('success' => true, 'status'=>$status, 'staffToken'=>$notifyToken); 
            }else{
                $response = array('fail' => false, 'msg'=>'The email or password you enter is invalid'); 
            }
             echo json_encode($response);
        }

        ##delete rooms function...........
        public function removeRoom($id)
        {
            $this->__dataBase();
            $deleteRoom = $this->conn->prepare("DELETE FROM room_tb WHERE rooms_id = $id");
            $r = $deleteRoom->execute();
            return $r;
        }
        ###delete staff mehod
        public function removeStaff($staffId){
            $this->__dataBase();
            $deleteStaffs = $this->conn->prepare("DELETE FROM staff_tb WHERE staff_id = $staffId");
            $invokedel = $deleteStaffs->execute();
            return $invokedel; 
        } 
        ###Editing function for users deatails
        public function updateStaffBio($fn, $ln, $email, $phone, $address,$role,$id)
        {
            $this->__dataBase();
            $updateStaffsBio = $this->conn->prepare("UPDATE staff_tb SET first_name=?, last_name=?, email= ?, phone=?,adderess=?, role_id=? WHERE staff_id =$id");
            $updateStaffsBio->bind_param('ssssss',$fn, $ln, $email, $phone,$address,$role);
            $updateres = $updateStaffsBio->execute();
            return $updateres;
        }

        //############ get method start here 
          // fetching of staff details from staff_tb
          public function fetchStaff()
          {
              $this->__daTaBase();
            //   $this->decodeAuth();
              $this->getAllStaffs = $this->conn->prepare("SELECT * FROM `staff_tb`");
              $this->getAllStaffs->execute();
              $this->staffs = $this->getAllStaffs->get_result();
              $res = $this->staffs->fetch_all(MYSQLI_ASSOC);
              if($res){
                  return $res;
              }
          }
        // ......fetching of rooms deatails to both user and admin
        public function fetchingOfRooms()
        {
            $this->__daTaBase();
            // $this->decodeAuth();
            $this->getAllRooms = $this->conn->prepare("SELECT * FROM `room_tb`");
            $this->getAllRooms->execute();
            $this->rooms = $this->getAllRooms->get_result();
            $res = $this->rooms->fetch_all(MYSQLI_ASSOC);
            if($res){
                return $res;
            }
        }
        // #### fetching of rooms end here

        //fetching of total
        public function totalFetched(){
            $this->__dataBase();
            $feched_one = $this->conn->prepare("SELECT * FROM room_tb");//fetching of rooms total number
            $feched_one->execute();
            $getResultOne = $feched_one->get_result();
            $tol = $getResultOne->num_rows;

            $feched_booked = $this->conn->prepare("SELECT * FROM book_tb");//counting  of booked total number
            $feched_booked->execute();
            $getResultbooked= $feched_booked->get_result();
            $bookedtol = $getResultbooked->num_rows;

            $this->getAllStaffs = $this->conn->prepare("SELECT * FROM `staff_tb`");//total number of staffs
            $this->getAllStaffs->execute();
            $this->staffs = $this->getAllStaffs->get_result();
            $staffTol = $this->staffs->num_rows;
            
            $arrayTotal = array($tol, $bookedtol, $staffTol, 8, 9);
            // $gg = array('fstname'=>'kola','lastname'=>'toluw','dept'=>'SPFT') 

            return $arrayTotal;
        }


        public function fetchBooking(){
            $this->__dataBase();
            $date = date('y/m/d');
            $uu ='is greater than the checkout date';
            $expired ='expired';
            $this->fetchBookingDetails = $this->conn->prepare("SELECT book_id, rooms_id, price, room_type, room_number, checkin_date, checkout_date, customer_fullname, customer_email, customer_id, status FROM book_tb JOIN customer_reg_tb USING (customer_id)");
            $this->fetchBookingDetails->execute();
            $this->getdet = $this->fetchBookingDetails->get_result();
            $this->fetched = $this->getdet->fetch_all(MYSQLI_ASSOC);
            $se =  $this->fetched;
            $num =  $this->getdet->num_rows;
            $bookedArray = array('data' =>$se, 'totalnum'=>$num);
            return  $bookedArray;
            // foreach ($se as  $ve) {
            //     // return  $ve['price'];
            //     if ( $date > $ve['checkout_date'] && $ve['status'] == ''){
            //         $bookId = $ve['booked_id'];
            //         $checkupdate = $this->conn->prepare("UPDATE book_tb SET status= ?");
            //         $checkupdate->bind_param('s',$expired );
            //         $checkupdate->execute();
            //         return $uu;
            //     }else {
            //         return 'noooo';
                    
            //     }
            // }
            
        }
    }

?>
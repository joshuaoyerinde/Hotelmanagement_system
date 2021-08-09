<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Authorization");
    // header("Access-Control-Allow-Headers: Origin, X-Reguested-With, Content-Type, Accept");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
    // header("Access-Control-Max-age: 86400");
    require realpath('vendor/autoload.php');
    class hotel{
        
            function __daTaBase(){
            $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
            $dotenv->load();
            $host = $_ENV['HOST'];
            $user = $_ENV['USER'];
            $pass = $_ENV['PASSWORD'];
            $db = $_ENV['DBNAME']; 
            $this->conn = new mysqli($host,$user,$pass,$db);

        }
         // jwt authentication function.......
         public function jwtAuth($email){
            $details = [
                'iss' => 'localhost:4200',
                'iat' => time(),
                'nbt' => time(),
                'exp' => time() + 36000,
                'info' =>[
                    'email' => $email
                ] 
            ];
            $myjwt = \Firebase\JWT\JWT::encode($details,$_ENV['SECRET']);
            if($myjwt){
                $arrayName = $myjwt;
            }
            return $arrayName;
    }
    public function decodeAuth()
    {
        $getAuth = getallheaders();
        $decojwt = $getAuth['Authorization'];
        $checkAuth = \Firebase\JWT\JWT::decode($decojwt,$_ENV['SECRET'],array('HS256'));
        $verify = $checkAuth->info->email;
        if($verify){
            return $verify;
        }
    }
    // jwt auth end here

    // public function sendMailer(  $email)
    // {
    //     $transport = (new Swift_SmtpTransport('smtp.gmail.com', 587,'tls'))
    //     ->setUsername('oyerindejoshua133@gmail.com')
    //     ->setPassword('atandadammy');
    
    //     // Create the Mailer using your created Transport
    //     $mailer = new Swift_Mailer($transport);

    //     // Create a message
    //     $message = (new Swift_Message('Dilux Hotel'))
    //     ->setFrom(['oyerindejoshua133@gmail.com' => 'dilux hotel'])
    //     ->setTo([$email])
    //     ->setBody('On behalf of our entire staff, we would like to welcome you to our property.<br> We are honored that you have chosen to stay with us and look forward to providing you with a memorable experience.');
    
    //     // Send the message
    //     $result = $mailer->send($message);
    //     if ($result){
    //         return $result;
    //     }

    // }
}
   

?>
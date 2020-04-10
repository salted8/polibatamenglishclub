<?php
    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $msg = $_POST['msg'];

        $to='faishalnursetiawan@gmail.com';
        $subject='Form Submission';
        $message='Name: '.$name."\n"."Subject: ".$subject."Message: "."\n\n".$msg;

        if(mail($to,$subject,$message,$headers)){
            echo "<h1>Sent Successfully!";
        }
        else{
            echo "something wrong";
        }
    }


?>
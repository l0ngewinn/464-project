<?php
    $name = $_POST['firstName'] + ' ' + $_POST['lastName'];
    echo $name;
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'longewinn@gmail.com';

    $email_subject = "Contact form from: $visitor_email";
    $email_body = "$name sent: \n$message";

    mail($to, $email_subject, $email_body);
    header('Location: ../pages/thankyou.html');
?>
<?php
    $host = 'localhost';
    $user = 'root';
    $password = 'root';
    $db_name = 'contact_forms';
    $db = new mysqli(
       $host,
       $user,
       $password,
       $db_name
    );
    if ($db->connect_error) {
        echo 'Errno: '.$db->connect_errno;
        echo '<br>';
        echo 'Error: '.$db->connect_error;
        exit();
      }
?>

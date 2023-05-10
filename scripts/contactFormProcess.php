<?php
    echo 'accessed process form';
    $query = "INSERT INTO contact(
        firstname, lastName, 
        email, 
        message
    ) 
    VALUES (
        '$_POST[firstName]', '$_POST[lastName]',
        '$_POST[email]',
        '$_POST[message]'
    );";
    
    $success = mysqli_query($db, $query);
    if ($success) {
        echo 'success';
        header('Location: ../pages/thankyou.html');
    } else {
        echo 'error';
    }
    mysqli_close($db)
    header('Location: ../pages/thankyou.html');
?>
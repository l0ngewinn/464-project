<?php
    $query = "INSERT INTO contact(
        firstName, lastName, 
        email, 
        message
    ) 
    VALUES (
        '$_POST[firstName]', '$_POST[lastName]',
        '$_POST[email]',
        '$_POST[message]'
    );";
    $success = mysqli_query($db, $query);

    mysqli_close($db);
?>
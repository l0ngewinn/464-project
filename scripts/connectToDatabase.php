<?php
/*connectToDatabase.php
Handles the connection to the Nature's Source database.
Values for $dbLocation, $dbUsername, $dbPassword, and
$dbName are assigned in the file database.inc, which
must be included from a "safe" (but readable) location
which is outside public_html, for security reasons.
*/

$dbLocation = 'localhost'
$dbUsername = 'root'
$dbPassword = 'root'
$dbName = 'contact_forms'

$db = mysqli_connect($dbLocation,
                     $dbUsername,
                     $dbPassword,
                     $dbName);
?>

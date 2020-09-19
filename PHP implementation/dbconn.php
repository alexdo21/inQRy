<?php
$host = 'localhost';
$db   = 'qrapp';
$user = 'root';
$pass = ''; //Set in production

$conn = mysqli_connect($host, $user, $pass, $db);
if (!$conn) {
     //Remove in production
     die("Connection failed: " . mysqli_connect_error());
}
?>
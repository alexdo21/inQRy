<?php
if (!isset($_POST['email']) || $_POST['email'] == ''
    || !isset($_POST['password']) || $_POST['password'] == ''
    || !isset($_POST['first-name']) || $_POST['first-name'] == ''
    || !isset($_POST['last-name']) || $_POST['last-name'] == '') {
    header("Location: http://173.0.242.34/register/?status=missing");
    die();
}

include '../dbconn.php';

$first = $_POST['first-name'];
$last = $_POST['last-name'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT);

$sql = "INSERT INTO user (FirstName, LastName, Email, PassHash) VALUES ('" . $first . "', '" . $last . "', '" . $email . "', '" . $password . "')";
$query = mysqli_query($conn, $sql);
if ($query) {
    header("Location: http://173.0.242.34");
    die();
} else {
    //echo mysqli_error($conn);
    header("Location: http://173.0.242.34/register/?status=error");
    die();
}
?>
<?php
if (!isset($_POST['email']) || $_POST['email'] == ''
    || !isset($_POST['password']) || $_POST['password'] == '') {
    header("Location: http://173.0.242.34/login/?status=missing");
    die();
}
$email = $_POST['email'];
$password = $_POST['password'];

include '../dbconn.php';

$sql = "SELECT * FROM user WHERE Email='" . $_POST['email'] . "'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    if (password_verify($password, $row['PassHash'])) {
        session_start();
        $_SESSION['email'] = $_POST['email'];
        $_SESSION['id'] = $row['UserID'];
        header("Location: http://173.0.242.34");
        die();
    } else {
        //echo mysqli_error($conn);
        header("Location: http://173.0.242.34/login/?status=fail");
        die();
    }
} else {
    //echo mysqli_error($conn);
    header("Location: http://173.0.242.34/login/?status=fail");
    die();
}
?>
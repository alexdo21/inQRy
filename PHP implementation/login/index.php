<?php
session_start();
if (isset($_SESSION['email'])) {
    header("Location: http://173.0.242.34");
    die();
}
?>
<!DOCTYPE html>
<html>
    <head>
        <title>QR - Login</title>
        <?php include '../head.php'; ?>
    </head>
    <body class="bg-dark">
        <div class="center-content">
            <div class="page-header">
            <h1>Login</h1>
            </div>
            <br>
            <?php include 'loginform.php'; ?>
            <br>
            <a href="/register/">Register</a>
            <br>
            <a href="/">Home</a>
            <br>
            <?php 
            if (isset($_GET['status'])) {
            if ($_GET['status'] == 'success') {
                echo '<div class="alert alert-success">You have logged in successfully!</div>';
            } else if ($_GET['status'] == 'fail') {
                echo '<div class="alert alert-danger">Unable to log in, please try again.</div>';  
            } else if ($_GET['status'] == 'error') {
                echo '<div class="alert alert-danger">Error logging in!</div>';
            } else if ($_GET['status'] == 'missing') {
                echo '<div class="alert alert-danger">Missing necessary login credentials, please try again.</div>';
            }
            }
            ?>
        </div>
    </body>
</html>
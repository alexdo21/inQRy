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
        <title>QR - Register</title>
        <?php include '../head.php'; ?>
    </head>
    <body class="bg-dark">
        <div class="center-content">
            <div class="page-header">
            <h1>Register</h1>
            </div>
            <br>
            <?php include 'registerform.php'; ?>
            <br>
            <a href="/login/">Login</a>
            <br>
            <a href="/">Home</a>
            <br>
            <?php 
            if (isset($_GET['status'])) {
            if ($_GET['status'] == 'success') {
                echo '<div class="alert alert-success">You have registered successfully!</div>';
            } else if ($_GET['status'] == 'error') {
                echo '<div class="alert alert-danger">Error registering user!</div>';
            } else if ($_GET['status'] == 'missing') {
                echo '<div class="alert alert-danger">Missing necessary information for registration, please try again.</div>';
            }
            }
            ?>
        </div>
    </body>
</html>
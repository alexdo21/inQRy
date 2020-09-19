<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>QR</title>

    <?php include 'head.php'; ?>
    <?php include 'dbconn.php'; ?>

    <!--<script src="libraries/qrcode/qrcode.min.js"></script>-->
  </head>
  <body class="bg-dark">
    <div class="center-content">
      <?php if (isset($_SESSION['email'])): ?>
        <div class="alert alert-success">You are currently logged in as <strong><?php echo $_SESSION['email']; ?></strong>.</div>
        <a href="/login/logout.php">Log out</a>
      <?php else: ?>
        <div class="alert alert-danger">You are <strong>not</strong> currently logged in.</div>
        <a href="/register/">Register</a><br>
        <a href="/login/">Login</a>
      <?php endif; ?>
    </div>
    <div class="center-content">
        <div class="page-header">
          <h1>Main Page / Admin Dashboard</h1>
          <h2><a href="/location/">/location/</a><small> - Add/remove locations and generate QR codes for them</small></h2>
          <h2><a href="/log/">/log/</a> - <small>View information about current check-ins</small></h2>
        </div>
    </div>
    <!--<div class="container center-content border">
      <div class="page-header">
        <h1>Generate QR Codes</h1>
      </div>
      <br>
      <label for="location">Location name:</label><br>
      <input type="text" id="location"><br><br>
      <input type="button" value="Generate QR code" onClick="document.getElementById('qrcode').innerHTML = ''; new QRCode(document.getElementById('qrcode'), 'http://173.0.242.34/scanned.php?location=' + document.getElementById('location').value);">
      <br><br>
      <div id="qrcode"></div>
    </div>-->
  </body>
</html>
<?php
session_start();
include '../dbconn.php';

if (isset($_GET['add-loc']) && $_GET['add-loc'] != '') {
    $sql = "INSERT INTO site (LocationName) VALUES ('" . $_GET['add-loc'] . "')";
    $result = mysqli_query($conn, $sql);
    //echo mysqli_error($conn);
} else if (isset($_GET['remove-loc']) && $_GET['remove-loc'] != '') {
    $sql = "DELETE FROM site WHERE LocationName='" . $_GET['remove-loc'] . "'";
    $result = mysqli_query($conn, $sql);
    //echo mysqli_error($conn);
}
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Location Manager</title>
        <?php include '../head.php'; ?>
        <script src="../libraries/qrcode/qrcode.min.js"></script>
    </head>
    <body class="bg-dark">
        <div class="center-content">
        <?php if (isset($_SESSION['email'])): ?>
            <div class="alert alert-success">You are currently logged in as <strong><?php echo $_SESSION['email']; ?></strong>.</div>
            <a href="/login/logout.php">Log out</a><br>
            <a href="/">Home</a>
        <?php else: ?>
            <div class="alert alert-danger">You are <strong>not</strong> currently logged in.</div>
            <a href="/register/">Register</a><br>
            <a href="/login/">Login</a><br>
            <a href="/">Home</a>
        <?php endif; ?>
        </div>
        <div class="center-content">
            <div class="page-header">
                <h1>Manage Locations</h1>
            </div>
            <table class="table table-striped table-dark">
                <br>
                <form>
                    <label for="add-loc">Location name:</label><br>
                    <input type="text" name="add-loc"><br>
                    <input type="submit" value="Add new location">
                </form>
                <br><br>
                <tr>
                    <th colspan="2">Locations</th>
                    <th>QR Codes</th>
                </tr>
                <?php
                $sql = 'SELECT * FROM site';
                $result = mysqli_query($conn, $sql);
                while ($row = mysqli_fetch_assoc($result)) {
                    echo '<tr><td>' . $row['LocationName'] . '</td>';
                    echo '<td><form><input name="remove-loc" value="' . $row['LocationName'] . '" hidden><input type="submit" class="btn btn-danger" value="Delete"></form></td>';
                    echo '<td><div id="' . $row['LocationName'] . '" class="qr"></div></td>';
                    echo '</tr>';
                }
                ?>
                <script>
                var elements = document.getElementsByClassName('qr');
                for (var i = 0; i < elements.length; i++) {
                    new QRCode(elements[i], 'http://173.0.242.34/scanned.php?location=' + elements[i].id);
                }
                </script>
            </table>
        </div>
    </body>
</html>
<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Log</title>

        <?php include '../head.php'; ?>
        <?php include '../dbconn.php'; ?>
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
                <h1>Check-In Log</h1>
            </div>
            <br>
            <form>
                <input type="text" value="today" name="time" hidden>
                <input type="submit" value="View today's records">
            </form>
            <form>
                <input type="submit" value="View all records">
            </form>
            <br>
            <table class="table table-striped table-dark">
                <tr>
                    <th>User</th>
                    <th>Check-In Location</th>
                    <th>Time</th>
                </tr>
                <?php
                if (isset($_GET['time']) && $_GET['time'] == 'today') {
                    $sql = 'SELECT * FROM entry INNER JOIN user ON user.UserID=entry.UserID INNER JOIN site ON site.LocationID=entry.LocationID WHERE DATE(Time) = CURDATE() ORDER BY Time DESC';
                } else {
                    $sql = 'SELECT * FROM entry INNER JOIN user ON user.UserID=entry.UserID INNER JOIN site ON site.LocationID=entry.LocationID ORDER BY Time DESC';
                }
                $result = mysqli_query($conn, $sql);
                while ($row = mysqli_fetch_assoc($result)) {
                    echo '<tr>';
                    echo '<td>' . $row['Email'] . '</td>';
                    echo '<td>' . $row['LocationName'] . '</td>';
                    echo '<td>' . $row['Time'] . '</td>';
                    echo '</tr>';
                }
                ?>
            </table>
        </div>
    </body>
</html>
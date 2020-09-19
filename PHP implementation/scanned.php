<?php
session_start();
if (!isset($_GET['location'])) {
    header("Location: http://173.0.242.34");
    die();
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Checking in to <?php echo $_GET['location']; ?></title>

        <?php include 'head.php'; ?>
    </head>
    <body class="bg-dark">
        <div class="center-content">
            <?php
            if (isset($_SESSION['email'])) {

                include 'dbconn.php';
                $sql = "SELECT * FROM user WHERE Email='" . $_SESSION['email'] . "'";
                $result = mysqli_query($conn, $sql);
                $userID = mysqli_fetch_assoc($result)['UserID'];
                //echo mysqli_error($conn);
                
                $sql = "SELECT * FROM site WHERE LocationName='" . $_GET['location'] . "'";
                $result = mysqli_query($conn, $sql);
                $locID = mysqli_fetch_assoc($result);
                if ($locID != null) {
                    $locID = $locID['LocationID'];
                    //echo mysqli_error($conn);

                    $sql = "INSERT INTO entry (UserID, LocationID) VALUES ('" . $userID . "', '" . $locID . "')";
                    $result = mysqli_query($conn, $sql);
                    echo '<div class="alert alert-success">You have checked into <strong>' . $_GET['location'] . '</strong> as <strong>' . $_SESSION['email'] . '</strong></div>';
                } else {
                    echo '<div class="alert alert-warning">You have attempted to check into an unrecognized location (<strong>' . $_GET['location'] . '</strong>) as <strong>' . $_SESSION['email'] . '</strong></div>';
                }
                //$sql = "INSERT INTO entry (FirstName, LastName, Email, PassHash) VALUES ('" . $first . "', '" . $last . "', '" . $email . "', '" . $password . "')";
                //$query = mysqli_query($conn, $sql);
                /*if ($query) {
                    header("Location: http://173.0.242.34");
                    die();
                } else {
                    //echo mysqli_error($conn);
                    header("Location: http://173.0.242.34/register/?status=error");
                    die();
                }*/

            } else {
                echo '<div class="alert alert-warn">You have checked into <strong>' . $_GET['location'] . '</strong> but are not currently logged in! Please log in to be tracked.</div>';
            }
            ?>
            <input type="button" onClick="window.close()" value="Close page"><br><br>
            <a href="/">Return home</a>
        </div>
    </body>
</html>
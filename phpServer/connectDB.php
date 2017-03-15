<?php
$servername = "mysql.hostinger.in.th";
$username = "u955120024_admin";
$passwordDB = "025844387naruto";
$nameDB = "u955120024_orpai";
// Create connection
$conn = new mysqli($servername, $username, $passwordDB,$nameDB);
mysqli_set_charset($conn, "utf8");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


?>


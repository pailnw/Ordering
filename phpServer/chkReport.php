<?php
include './connectDB.php';
$Years = @$_POST["Year"];
//มกราคม
$sql1 = "SELECT SUM(O_Price) FROM Orders where  YEAR(O_Date)='".$Years."' and MONTH(O_Date)=1";
$query1 = mysqli_query($conn, $sql1);
$result1 = mysqli_fetch_array($query1);
//กุมภา
$sql2 = "SELECT SUM(O_Price) FROM Orders where  YEAR(O_Date)='".$Years."' and MONTH(O_Date)=2";
$query2 = mysqli_query($conn, $sql2);
$result2 = mysqli_fetch_array($query2);
//มีนา
$sql3 = "SELECT SUM(O_Price) FROM Orders where  YEAR(O_Date)='".$Years."' and MONTH(O_Date)=3";
$query3 = mysqli_query($conn, $sql3);
$result3 = mysqli_fetch_array($query3);
//เมษา
$sql4 = "SELECT SUM(O_Price) FROM Orders where  YEAR(O_Date)='".$Years."' and MONTH(O_Date)=4";
$query4 = mysqli_query($conn, $sql4);
$result4 = mysqli_fetch_array($query4);
//พฤกภา
$sql5 = "SELECT SUM(O_Price) FROM Orders where  YEAR(O_Date)='".$Years."' and MONTH(O_Date)=5";
$query5 = mysqli_query($conn, $sql5);
$result5 = mysqli_fetch_array($query5);
//มิถุนา
$sql6 = "SELECT SUM(O_Price) FROM Orders where  YEAR(O_Date)='".$Years."' and MONTH(O_Date)=6";
$query6 = mysqli_query($conn, $sql6);
$result6 = mysqli_fetch_array($query6);
//กรกฏา
$sql7 = "SELECT SUM(O_Price) FROM Orders where  YEAR(O_Date)='".$Years."' and MONTH(O_Date)=7";
$query7 = mysqli_query($conn, $sql7);
$result7 = mysqli_fetch_array($query7);
//สิงหา
$sql8 = "SELECT SUM(O_Price) FROM Orders where  YEAR(O_Date)='".$Years."' and MONTH(O_Date)=8";
$query8 = mysqli_query($conn, $sql8);
$result8 = mysqli_fetch_array($query8);
//กันยา
$sql9 = "SELECT SUM(O_Price) FROM Orders where  YEAR(O_Date)='".$Years."' and MONTH(O_Date)=9";
$query9 = mysqli_query($conn, $sql9);
$result9 = mysqli_fetch_array($query9);
//ตุลา
$sql10 = "SELECT SUM(O_Price) FROM Orders where  YEAR(O_Date)='".$Years."' and MONTH(O_Date)=10";
$query10 = mysqli_query($conn, $sql10);
$result10 = mysqli_fetch_array($query10);
//พฤศจิกา
$sql11 = "SELECT SUM(O_Price) FROM Orders where  YEAR(O_Date)='".$Years."' and MONTH(O_Date)=11";
$query11 = mysqli_query($conn, $sql11);
$result11 = mysqli_fetch_array($query11);
//ธันวา
$sql12 = "SELECT SUM(O_Price) FROM Orders where  YEAR(O_Date)='".$Years."' and MONTH(O_Date)=12";
$query12 = mysqli_query($conn, $sql12);
$result12 = mysqli_fetch_array($query12);
?>

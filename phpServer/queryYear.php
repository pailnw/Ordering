<?php
$v = json_decode(stripslashes($_GET["data"]));

	header("Access-Control-Allow-Origin: *");
	header("Content-type: application/json", true);	
	header("Content-Type: text/javascript; charset=utf-8");
	$connect = mysqli_connect("mysql.hostinger.in.th", "u955120024_admin", "025844387naruto");
	if(!$connect){
		die('Could not connect to MYSQL '.mysql_error());
	}
	mysqli_select_db($connect,"u955120024_orpai") or die (mysql_error());
	mysqli_query($connect,"SET NAMES UTF8");
           
$json_return = array();
$myQuery1 ="SELECT DISTINCT YEAR(O_Date) ,MONTH(O_Date)   FROM Orders";
	
		$query1 = mysqli_query($connect,$myQuery1);
	while ($row = mysqli_fetch_assoc($query1)) {
		array_push($json_return, 
			array(
				"YEARS"  => $row["YEAR(O_Date)"],
				"MONTHS" => $row["MONTH(O_Date)"]
				
				
			)
		);
	}

	echo json_encode($json_return);
?>


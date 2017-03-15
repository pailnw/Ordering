<?php
$v = json_decode(stripslashes($_GET["data"]));
$years = $v ->years;
//$months= $v->months;
	header("Access-Control-Allow-Origin: *");
	header("Content-type: application/json", true);	
	header("Content-Type: text/javascript; charset=utf-8");
	$connect = mysqli_connect("mysql.hostinger.in.th", "u955120024_admin", "025844387naruto");
	if(!$connect){
		die('Could not connect to MYSQL '.mysql_error());
	}
	mysqli_select_db($connect,"u955120024_orpai") or die (mysql_error());
	mysqli_query($connect,"SET NAMES UTF8");

           SET CHARACTER SET utf8

$json_return = array();
//$myQuery1 =" SELECT   sum(O_Price) 
//FROM Orders where YEAR(O_Date)= '".$years."' and MONTH(O_Date) ='".$months."'";
$myQuery1 =" SELECT   sum(O_Price) ,YEAR(O_Date)
FROM Orders where YEAR(O_Date)= '".$years."'";	
		$query1 = mysqli_query($connect,$myQuery1);
	while ($row = mysqli_fetch_assoc($query1)) {
		array_push($json_return, 
			array(
				"sum"  => $row["sum(O_Price)"],
"Years"  => $row["YEAR(O_Date)"]
				
				
			)
		);
	}

	echo json_encode($json_return);
?>

<?php
$v = json_decode(stripslashes($_GET["data"]));
$EmenuID = $v->MnEdit2;

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
$myQuery =" SELECT * from Menu where Mn_ID= '".$EmenuID."'";
	
		$query1 = mysqli_query($connect,$myQuery);
	while ($row = mysqli_fetch_assoc($query1)) {
		array_push($json_return, 
			array(
				"Mn_ID" => $row["Mn_ID"],
				"Mn_Name" => $row["Mn_Name"],
				"Mn_Price" => $row["Mn_Price"],
				"Mn_Type" => $row["Mn_Type"],
				"Mn_pic" => $row["Mn_pic"]
				
			)
		);
	}

	echo json_encode($json_return);
?>
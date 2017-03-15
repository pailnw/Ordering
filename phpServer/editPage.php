<?php
$v = json_decode(stripslashes($_GET["data"]));
$EmenuID = $v->MnEdit2;
$EorID = $v->OEdit2;
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
$myQuery1 =" SELECT OrderDetail.O_ID,Menu.Mn_id, Menu.Mn_Name,OrderDetail.OD_total
					FROM Menu INNER JOIN OrderDetail ON OrderDetail.Mn_id = Menu.Mn_ID WHERE O_ID = '".$EorID ." ' and Menu.Mn_ID = '".$EmenuID ." '";
	
		$query1 = mysqli_query($connect,$myQuery1);
	while ($row = mysqli_fetch_assoc($query1)) {
		array_push($json_return, 
			array(
				"O_ID"  => $row["O_ID"],
				"Mn_id" => $row["Mn_id"],
				"Mn_Name" => $row["Mn_Name"],
				"OD_total" => $row["OD_total"]
				
			)
		);
	}

	echo json_encode($json_return);
?>


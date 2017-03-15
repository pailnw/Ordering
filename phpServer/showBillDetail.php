<?php
$v = json_decode(stripslashes($_GET["data"]));
$billDetail = $v->O_ID;
	header("Access-Control-Allow-Origin: *");
	header("Content-type: application/json", true);	
	$connect = mysqli_connect("mysql.hostinger.in.th", "u955120024_admin", "025844387naruto");
	if(!$connect){
		die('Could not connect to MYSQL '.mysql_error());
	}
	mysqli_select_db($connect,"u955120024_orpai") or die (mysql_error());
	mysqli_query($connect,"SET NAMES UTF8");
	$json_return = array();

	
		$myQuery ="SELECT OrderDetail.O_ID, Menu.Mn_id, Menu.Mn_Name, OrderDetail.OD_total, Menu.Mn_Price, Menu.Mn_Price * OrderDetail.OD_total AS TotalPrice
FROM Menu
INNER JOIN OrderDetail ON OrderDetail.Mn_id = Menu.Mn_id
WHERE O_ID ='".$billDetail."'";
	
		$query = mysqli_query($connect,$myQuery);
	while ($row = mysqli_fetch_assoc($query)) {
		array_push($json_return, 
			array(
                                "O_ID" => $row["O_ID"],
				"Mn_Name" => $row["Mn_Name"],
                                "Mn_Price" => $row["Mn_Price"],
				"OD_total" => $row["OD_total"],
				"TotalPrice" => $row["TotalPrice"]

			)
		);
	}

	echo json_encode($json_return);
?>	
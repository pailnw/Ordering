<?php
$v = json_decode(stripslashes($_GET["data"]));
$Mn_id = $v->Mn_id;

	header("Access-Control-Allow-Origin: *");
	header("Content-type: application/json", true);	


	$connect = mysqli_connect("mysql.hostinger.in.th", "u955120024_admin", "025844387naruto");
	if(!$connect){
		die('Could not connect to MYSQL '.mysql_error());
	}
	mysqli_select_db($connect,"u955120024_orpai") or die (mysql_error());
	mysqli_query($connect,"SET NAMES UTF8");

      
 		   $myQuery ="DELETE from Recommended where Mn_id='".$Mn_id."'";

         $query = mysqli_query($connect,$myQuery);
$json_return = array();
$myQuery1 =" SELECT Menu.Mn_id, Menu.Mn_Name,Menu.Mn_Pic,Recommended.Detail
					FROM Menu INNER JOIN Recommended ON Recommended.Mn_id = Menu.Mn_id";
	
		$query1 = mysqli_query($connect,$myQuery1);
	while ($row = mysqli_fetch_assoc($query1)) {
		array_push($json_return, 
			array(
				
				"Mn_id" => $row["Mn_id"],
				"Mn_Name" => $row["Mn_Name"],
				"Detail" => $row["Detail"]
				
			)
		);
	}

	echo json_encode($json_return);
?>
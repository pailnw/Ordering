<?php
$v = json_decode(stripslashes($_GET["data"]));
$chk = $v->orderId;
$someTotal = $v ->someTotal;
	header("Access-Control-Allow-Origin: *");
	header("Content-type: application/json", true);	
	$connect = mysqli_connect("mysql.hostinger.in.th", "u955120024_admin", "025844387naruto");
	if(!$connect){
		die('Could not connect to MYSQL '.mysql_error());
	}
	mysqli_select_db($connect,"u955120024_orpai") or die (mysql_error());
	mysqli_query($connect,"SET NAMES UTF8");
	$json_return = array();
	//echo  "SELECT buildid, buildname,builddescrption,buildpicture  FROM build ".$Q." order by buildid" ;
	//$query = mysql_query($myQuery);
	
		$myQuery =" UPDATE Orders SET O_Status= 0,O_Price='".$someTotal."' where O_ID= '".$chk. "'";
	
		$query = mysqli_query($connect,$myQuery);
	while ($row = mysqli_fetch_assoc($query)) {
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
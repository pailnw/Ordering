<?php
$v = json_decode(stripslashes($_GET["data"]));
$chk = $v->search;
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
	
		$myQuery =" SELECT * from Orders WHERE O_Status = 1 ";
	
		$query = mysqli_query($connect,$myQuery);
	while ($row = mysqli_fetch_assoc($query)) {
		array_push($json_return, 
			array(
				"O_ID" => $row["O_ID"],
				"O_Price" => $row["O_Price"],
				"O_Date" => $row["O_Date"],
				"O_Table" => $row["O_Table"],
				"m_id" => $row["m_id"]
				
			)
		);
	}

	echo json_encode($json_return);
?>
<?php
$v = json_decode(stripslashes($_GET["data"]));
$chk = $v->username;
$chk1 = $v->password;
	header("Access-Control-Allow-Origin: *");
	header("Content-type: application/json", true);	
	$connect = mysqli_connect("mysql.hostinger.in.th", "u955120024_admin", "025844387naruto");
	if(!$connect){
		die('Could not connect to MYSQL '.mysql_error());
	}
	mysqli_select_db($connect,"u955120024_orpai") or die (mysql_error());
	mysqli_query($connect,"SET NAMES UTF8");
	$json_return = array();

		$myQuery =" SELECT * from Member where m_user =  '".$chk."' and m_pass= '".$chk1."'";
	
		$query = mysqli_query($connect,$myQuery);
	while ($row = mysqli_fetch_assoc($query)) {
		array_push($json_return, 
			array(
				"m_id" => $row["m_id"],
				"m_fname" => $row["m_fname"],
				"m_lname" => $row["m_lname"],
				"m_user" => $row["m_user"],
				"m_pass" => $row["m_pass"]
				
			)
		);
	}

	echo json_encode($json_return);
?>
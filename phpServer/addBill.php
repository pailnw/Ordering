<?php
$v = json_decode(stripslashes($_GET["data"]));
$tableID = $v->tableID;
$m_id = $v->m_id;

	header("Access-Control-Allow-Origin: *");
	header("Content-type: application/json", true);	
	header("Content-Type: text/javascript; charset=utf-8");
	$connect = mysqli_connect("mysql.hostinger.in.th", "u955120024_admin", "025844387naruto");
	if(!$connect){
		die('Could not connect to MYSQL '.mysql_error());
	}
	mysqli_select_db($connect,"u955120024_orpai") or die (mysql_error());
	mysqli_query($connect,"SET NAMES UTF8");

           $myQuery =" insert into Orders(O_Price,O_Date,O_Table,m_id,	O_Status) values(0,CURDATE(),".$tableID.",".$m_id.",1)";
         $query = mysqli_query($connect,$myQuery);
$json_return = array();
$myQuery1 =" SELECT * from Orders WHERE O_Status = 1 ";
	
		$query1 = mysqli_query($connect,$myQuery1);
	while ($row = mysqli_fetch_assoc($query1)) {
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


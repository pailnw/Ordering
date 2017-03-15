<?php
$v = json_decode(stripslashes($_GET["data"]));
$O_ID = $v->O_ID;
$Mn_id = $v->Mn_id;
$OD_total = $v->OD_total;
	header("Access-Control-Allow-Origin: *");
	header("Content-type: application/json", true);	


	$connect = mysqli_connect("mysql.hostinger.in.th", "u955120024_admin", "025844387naruto");
	if(!$connect){
		die('Could not connect to MYSQL '.mysql_error());
	}
	mysqli_select_db($connect,"u955120024_orpai") or die (mysql_error());
	mysqli_query($connect,"SET NAMES UTF8");
if($OD_total==""  ){}else{
         //  $myQuery ="insert into OrderDetail(Mn_id,O_ID,OD_total) values(".$Mn_id.",".$O_ID.",".$OD_total.")";
 		   $myQuery ="insert into OrderDetail(Mn_id,O_ID,OD_total) values('".$Mn_id."','".$O_ID."','".$OD_total."')";

         $query = mysqli_query($connect,$myQuery);}
$json_return = array();
$myQuery1 ="SELECT OrderDetail.O_ID, Menu.Mn_id, Menu.Mn_Name, OrderDetail.OD_total, Menu.Mn_Price, Menu.Mn_Price * OrderDetail.OD_total AS TotalPrice
FROM Menu
INNER JOIN OrderDetail ON OrderDetail.Mn_id = Menu.Mn_id
WHERE O_ID ='".$O_ID."'";
	
		$query1 = mysqli_query($connect,$myQuery1);
	while ($row = mysqli_fetch_assoc($query1)) {
		array_push($json_return, 
			array(
				
				
 "Mn_Name" => $row["Mn_Name"],
                                "TotalPrice" => $row["TotalPrice"],
				"OD_total" => $row["OD_total"]
			)
		);
	}
	echo json_encode($json_return);
?>


	
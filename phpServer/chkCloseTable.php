<?php
include './connectDB.php';
$idtable = $_GET["idTable"];
$sql1 = "UPDATE Orders SET O_Status = 0 WHERE O_ID='".$idtable."'";
$query1 = mysqli_query($conn, $sql1);
//$row = mysqli_num_rows($query1);
if($query1>1){echo "<script language='javascript'>alert('ผิดพลาด');
		window.location='ShowOrder.php'</script>";}
                else{
                    echo "<script language='javascript'>alert('สำเร็จ');
		window.location='Order.php'</script>";}
?>

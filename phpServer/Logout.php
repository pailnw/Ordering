<?php
session_start();
session_destroy();
echo "<script language='javascript'>alert('Log out sucess');
		window.location='Index.php'</script>";
               // header("location:login.html");
?>


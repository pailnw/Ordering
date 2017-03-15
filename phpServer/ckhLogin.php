<?php
         session_start();
$userName = $_POST["txtUsername"];
$passWord = $_POST["txtPassword"];
include './connectDB.php';

$sql = "SELECT * From Member where m_user='".$userName."' and m_pass='".$passWord."'";

$query = mysqli_query($conn, $sql);

$queryFetch = mysqli_fetch_array($query);
    
if(!$queryFetch){
    
    echo "<script language='javascript'>alert('Uesrname or Password Incorect!');
		window.location='Index.php'</script>";
    
}else{
    $_SESSION["m_fname"]=$queryFetch["m_fname"];
$_SESSION["m_lname"]=$queryFetch["m_lname"];  

    header("location:Main.php");
   echo "<script language='javascript'>alert('Login Sucess');</script>";
    
}

?>


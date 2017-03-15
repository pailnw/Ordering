<!DOCTYPE HTML>
<?php session_start(); ?>
<html>
    <head>	
        <meta charset="utf-8" />
        <title>Report Ordering</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <link rel="stylesheet" href="css/main.css" />
        <link rel="stylesheet" type="text/css" href="css/datetimepicker.css"/>
        <style type="text/css">
        .custom-date-style {
                background-color: red !important;
        }
        </style>
        <script src="js/jquery.min.js"></script>
        <script src="js/skel.min.js"></script>
        <script src="js/util.js"></script>
        <script src="js/main.js"></script>
        <script src="js/jquery.js"></script>
    </head>
<body class="subpage">
        <header id="header">
            <div class="inner">
                <nav id="nav">
                    <a href="Main.php"><?php  echo $_SESSION["m_fname"]." ".  $_SESSION["m_lname"] ?></a>
                    <a href="Order.php" >รายการโต๊ะที่เปิดอยู่</a>
                    <a href="Report.php">รายงานยอดขาย</a>
                    <a href="Logout.php">Logout</a>
                </nav>
                <a href="#navPanel" class="navPanelToggle"><span class="fa fa-bars"></span></a>
            </div>
        </header>
        <footer id="footer">
            <div class="inner" align="center">
                  
                    <?php
                    include './connectDB.php';
                    $sql1 = "SELECT * FROM Orders where O_Status = 1";
                    $query1 = mysqli_query($conn, $sql1);
                   
                    
                    ?>
	<table style="width:100%">
  <tr bgcolor="red">
    <th align="center">เลขที่ใบสั่ง</th>
    <th align="center">โต๊ะ</th>  
    <th align="center">รหัสพนักงาน</th> 
     <th align="center"></th>
  </tr>
  <?php while ( $result1 = mysqli_fetch_array($query1)){?>
  <tr>
      <td align="center"><?php echo  $result1[0]; ?></td>
    <td align="center"><?php echo $result1[3]; ?></td>
    <td align="center"><?php echo $result1[4]; ?></td>
    <td align="center"><a href="ShowOrder.php?id=<?php echo $result1[0] ?>">รายละเอียด</a></td>
  </tr>
  <?php } ?>
        </table>
		</div>
            
	</footer> 
    
</body>
</html>
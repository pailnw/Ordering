<!DOCTYPE HTML>
<?php session_start(); ?>
<html>
    <head>
        <title>Report</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <link rel="stylesheet" href="css/main.css" />
        <link rel="stylesheet" type="text/css" href="css/datetimepicker.css"/>
        <link rel="stylesheet" href="css/style-table.css"/>
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
        <script src="js/jquery.datetimepicker.js"></script>
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
            <div class="inner"> 
                  
                <ul class="actions">
                    <li><a href="Order.php" class="button">รายการโต๊ะที่เปิดอยู่</a></li>
                    <li><a href="Report.php" class="button">รายงานยอดขาย</a></li>
                </ul>
	
		</div>
	</footer> 
    
</body>
</html>
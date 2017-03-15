<?php session_start(); ?>
<!DOCTYPE html>
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
                    <a href="Report.php" >รายงานยอดขาย</a>
                    <a href="Logout.php">Logout</a>
                </nav>
                <a href="#navPanel" class="navPanelToggle"><span class="fa fa-bars"></span></a>
            </div>
        </header>
        <footer id="footer">
            <div class="inner" align="center">
                <h2>&#3619;&#3634;&#3618;&#3591;&#3634;&#3609;</h2>
        <form action="Report.php" method="post" name="f1" >
                 <?php
                        include './connectDB.php';
                        include './chkReport.php';
                        $sqlYear = "SELECT DISTINCT YEAR(O_Date) FROM Orders";
                        $queryYear = mysqli_query($conn, $sqlYear);
                       // $queryFetch = mysqli_fetch_array($queryYear);
                        ?>
            <div class="6u 12u$(small)"> 
        <select name="Year" id="demo-category">
                            <?php
                            while ($resultYear =mysqli_fetch_array($queryYear)) {
                                echo "<option value='$resultYear[0]'>" . $resultYear[0]. " </option>";
                            }
                            ?></select>
            </div><br/>
            <input type="submit" name="submit" value="ยืนยัน"><br>

        </form>
        <?php 
         if(@$_POST["submit"]!=""){
        
?>     
            <table style="width:100%">
  <tr>
    <th align="center">เดือน</th>
    <th align="center">รายได้ต่อเดือน</th>  
  </tr>
<tr>
    <td align="center">มกราคม</td>
    <td align="center"><?php  
    if($result1[0]==""){    echo '0';}else{ echo $result1[0];}?> บาท</td>
  </tr>
  <tr>
    <td align="center">กุมภาพันธ์</td>
    <td align="center"><?php if($result2[0]==""){    echo '0';}else{echo $result2[0];}?> บาท</td>
  </tr>
  <tr>
    <td align="center">มีนาคม</td>
    <td align="center"><?php if($result3[0]==""){    echo '0';}else{ echo $result3[0];}?> บาท</td>
  </tr>
  <tr>
    <td align="center">เมษายน</td>
    <td align="center"><?php if($result4[0]==""){echo '0';}else{echo $result4[0];}?> บาท</td>
  </tr>
  <tr>
    <td align="center">พฤษภาคม</td>
    <td align="center"><?php  if($result5[0]==""){echo '0';}else{ echo $result5[0];}?> บาท</td>
  </tr>
  <tr>
    <td align="center">มิถุนายน</td>
    <td align="center"><?php if($result6[0]==""){echo '0';}else{echo $result6[0];}?> บาท</td>
  </tr>
  <tr>
    <td align="center">กรกฏาคม</td>
    <td align="center"><?php if($result7[0]==""){echo '0';}else{echo $result7[0];}?> บาท</td>
  </tr>
  <tr>
    <td align="center">สิงหาคม</td>
    <td align="center"><?php if($result8[0]==""){echo '0';}else{echo $result8[0];}?> บาท</td>
  </tr>
  <tr>
    <td align="center">กันยายน</td>
    <td align="center"><?php if($result9[0]==""){echo '0';}else{echo $result9[0];}?> บาท</td>
  </tr>
  <tr>
    <td align="center">ตุลาคม</td>
    <td align="center"><?php if($result10[0]==""){echo '0';}else{echo $result10[0];}?> บาท</td>
  </tr>
  <tr>
    <td align="center">พฤศจิกายน</td>
    <td align="center"><?php  if($result11[0]==""){echo '0';}else{ echo $result11[0];}?> บาท</td>
  </tr>
  <tr>
    <td align="center">ธันวาคม</td>
    <td align="center"><?php if($result12[0]==""){echo '0';}else{echo $result12[0];}?> บาท</td>
  </tr>
  <tr>
    <td align="center">รวมรายได้ทั้งหมด</td>
    <td align="center"><?php echo $result1[0]+$result2[0]+$result3[0]+$result4[0]+$result5[0]+$result6[0]
            +$result7[0]+$result8[0]+$result9[0]+$result10[0]+$result11[0]+$result12[0];?> บาท</td>
  </tr>
            </table>
        
        <?php } else {
     echo 'โปรดเลือกปีที่ต้องการจะดูรายงาน';
} ?>
            </div>
        </footer>
    </body>
</html>

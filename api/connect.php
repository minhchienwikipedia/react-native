<?php
$host='mysql.hostinger.vn';
$name='u138721054_root'; //user name dang nhap database
$pass='123456789'; //mat khau dang nhap vao database
$database='u138721054_data'; //ten database dung


$conn=mysqli_connect($host,$name,$pass,$database) or die("khong ket noi dc");
// mysql_select_db($database,$conn) or die("khong lay dc CSDL");  
date_default_timezone_set('Asia/Ho_Chi_Minh');
mysqli_query($conn,"SET NAMES 'UTF8'");

?>
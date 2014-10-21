<?php
//displaying values from database in table

$con=mysqli_connect("localhost","root","","visa_db");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$id=$_GET['index'];

session_start();
$username = $_SESSION['login_user'];
$checkUser = mysqli_query($con,"SELECT UserName FROM adminuser WHERE UserName='$username'");
if(mysqli_num_rows($checkUser) == 0)
die;

$result = mysqli_query($con, "DELETE FROM VisaDetails WHERE slno='$id'");
mysqli_close($con);
?>



;




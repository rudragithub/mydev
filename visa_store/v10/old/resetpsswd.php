<?php
$con=mysqli_connect("localhost","root","","visa_db");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
session_start(); 
$password =  ($_GET['reset_pwd']);
$uname=$_SESSION['login_user'];

echo $uname;
die;
$sql="UPDATE registrationtable SET Password='$password' WHERE UserName='$uname'";
	 	

if (!mysqli_query($con,$sql)) {
  die('Error: ' . mysqli_error($con));
}
else{
echo "valid";}

mysqli_close($con);
?>


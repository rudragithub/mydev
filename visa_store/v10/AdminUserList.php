<?php
$con=mysqli_connect("localhost","root","","visa_db");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$username = ($_GET['ps_no']);
$sql="INSERT INTO AdminUser (UserName) VALUES ('$username')";	 	

if (!mysqli_query($con,$sql)) {
  die('Error: ' . mysqli_error($con));
}
else{
echo "valid";
}
mysqli_close($con);
?>

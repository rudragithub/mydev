<?php

$con=mysqli_connect("localhost","root","","visa_db");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// username and password sent from Form
$username=($_GET['login_uname']);
$password=($_GET['login_pwd']);

$sql="SELECT * FROM masteruser WHERE UserName='$username' and Password='$password'";
$result=mysqli_query($con,$sql);
$count=mysqli_num_rows($result);

// If success count will be 1
if($count==1)
{
echo "valid";
}
else
{
echo "invalid";
$error="Your Login Name or Password is invalid";
}
mysqli_close($con);
?>




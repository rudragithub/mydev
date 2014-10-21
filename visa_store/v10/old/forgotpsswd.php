<?php

$con=mysqli_connect("localhost","root","","visa_db");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
session_start();

// username and password sent from Form
$username=($_GET['forgot_uname']);
$question=($_GET['forgot_pwd']);
$answer=($_GET['forgot_ans']);

$sql="SELECT Sl_no FROM RegistrationTable WHERE UserName='$username' and Question='$question' and Answer='$answer'";
$result=mysqli_query($con,$sql);
$count=mysqli_num_rows($result);



// If success count will be 1
if($count==1)
{
echo "valid";
//redirect to reset form
}
else{
//echo "invalid";
}
?>

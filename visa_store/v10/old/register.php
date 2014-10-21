<?php
$con=mysqli_connect("localhost","root","","visa_db");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$username = ($_GET['newuser_uname']);
$password = ($_GET['newuser_pwd']);
$confirm_password = ($_GET['confirm_pwd']);
$question = ($_GET['new_user_question']);
$answer= ($_GET['newuser_ans']);
$userType= ($_GET['type']);

if($password != $confirm_password){
echo "pass";
mysqli_close($con);
die;
}

$sql1="Select * from adminuser where  UserName = '$username'";
$result=mysqli_query($con,$sql1);
$count=mysqli_num_rows($result);

if($count==1)
{
$sql="INSERT INTO RegistrationTable (UserName,Password,Question,Answer,UserType) VALUES ('$username','$password', '$question', '$answer','Admin')";
}
else if($userType == "Normal")
{
 $sql="INSERT INTO RegistrationTable (UserName,Password,Question,Answer,UserType) VALUES ('$username','$password', '$question', '$answer','Normal')";
}
else{
echo "invalid";
}
	

if (!mysqli_query($con,$sql)) {
  die('Error: ' . mysqli_error($con));
}
else{
echo "valid";
}

mysqli_close($con);
?>

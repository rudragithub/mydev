<?php

$con=mysqli_connect("localhost","root","","visa_db");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}


if (!isset($_GET['log'])) {$qry_status=$_GET['chk'] = '';}else{$qry_status=$_GET['chk'];};

$loginType=($_GET['ltype']);

//------------ GET UserName and password from input --------------------
$username=($_GET['login_uname']);
$password=($_GET['login_pwd']);
$type=($_GET['user_type']);

$sql="SELECT Sl_no FROM registrationtable WHERE UserName='$username' and Password='$password' and UserType='$type'";
$result=mysqli_query($con,$sql);
$count=mysqli_num_rows($result);


$favcolor="red";

switch ($favcolor) {
  case "red":
    echo "Your favorite color is red!";
    break;
  case "blue":
    echo "Your favorite color is blue!";
    break;
  case "green":
    echo "Your favorite color is green!";
    break;
  default:
    echo "Your favorite color is neither red, blue, or green!";
};


if($count==1)
{
	session_start();
	$_SESSION['login_user']=$username;
	echo "valid";
}
else
{
	echo "invalid";
	session_destroy();
}
mysqli_close($con);
?>




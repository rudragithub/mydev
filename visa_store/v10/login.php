<?php


$con=mysqli_connect("localhost","root","","visa_db");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$mode=($_GET['login_mode']);
	

switch ($mode) {
  case "login":
    login();
    break;
  case "register":
    register();
    break;
  case "forgot":
    forgotPwd();
    break;
  case "reset":
    resetPwd();
    break;
  default:
    echo "Your favorite color is neither red, blue, or green!";
}

function login()
{
	global $con;
	$username=($_GET['login_uname']);
	$password=($_GET['login_pwd']);
	$type=($_GET['user_type']);	
		
	$result=mysqli_query($con,"SELECT Sl_no FROM registrationtable WHERE UserName='$username' and Password='$password' and UserType='$type'");	
	if(mysqli_num_rows($result) == 1)
	{
		session_start();
		$_SESSION['login_user']=$username;
		echo "valid";
	}
	else
	{
		echo "invalid";
	}
}

function register()
{

	global $con;
	$username = $_GET['newuser_uname'];
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
	
	
	if($userType == "Admin")
	{
		$result=mysqli_query($con,"Select * from adminuser where UserName = '$username'");
		if(mysqli_num_rows($result) == 1)
		{
			mysqli_query($con,"INSERT INTO RegistrationTable (UserName,Password,Question,Answer,UserType) VALUES ('$username','$password', '$question', '$answer','Admin')");
			echo "valid";
		}
		else
		{
			echo "invalid";
		}
	}
	else if($userType == "Normal")
	{	
		mysqli_query($con,"INSERT INTO RegistrationTable (UserName,Password,Question,Answer,UserType) VALUES ('$username','$password', '$question', '$answer','Normal')");
		echo "valid";
		
	}
	else{
		echo "invalid";
	}
}


function forgotPwd()
{
	global $con;
	$username=($_GET['forgot_uname']);
	$question=($_GET['forgot_pwd']);
	$answer=($_GET['forgot_ans']);
	
	
	session_start();	
	$_SESSION['login_user']=$username;
		
	$result=mysqli_query($con,"SELECT Sl_no FROM RegistrationTable WHERE UserName='$username' and Question='$question' and Answer='$answer'");
	
	if(mysqli_num_rows($result)==1)
	{
		echo "valid";	
	}
	else{
		echo "invalid";
		if($_SESSION['login_user'] != "")
		session_destroy();
	}
	
}

function resetPwd()
{
	global $con;
	$password =  ($_GET['reset_pwd']);
	session_start();	
	$uname=$_SESSION['login_user'];
	mysqli_query($con,"UPDATE registrationtable SET Password='$password' WHERE UserName='$uname'");
	echo "valid";	
}
mysqli_close($con);
?>




<?php
//displaying values from database in table

$con=mysqli_connect("localhost","root","","visa_db");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$username = ($_GET['ps_no']);

session_start();
$sessionuser = $_SESSION['login_user'];
$checkUser = mysqli_query($con,"SELECT UserName FROM adminuser WHERE UserName='$sessionuser'");
if(mysqli_num_rows($checkUser) == 0)
die;

$result = mysqli_query($con,"SELECT * FROM visadetails Where Ps_no='$username' limit 1");

$num_rows = mysqli_num_rows($result);

$row = mysqli_fetch_array($result);

if($num_rows == 1)
{
echo  $row['Name'].'||'.$row['Status'].'||'.$row['AvailableBy'].'||'.$row['BaseAccount'].'||'.$row['BaseDH'].'||'.$row['PrimaryDomain'].'||'.$row['PrimarySkills'].'||'.$row['AdditionalSkills'].'||'.$row['VisaValidity'];
}
else
{
 echo 'invalid';
}

 mysqli_close($con);
?>




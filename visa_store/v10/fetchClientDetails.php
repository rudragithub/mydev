<?php
//displaying values from database in table

$con=mysqli_connect("localhost","root","","visa_db");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$cname=$_GET['filter_clientName'];


$from =  ($_GET['reset_from']);
$to =  ($_GET['reset_to']);

/*session_start();
$username = $_SESSION['login_user'];
$checkUser = mysqli_query($con,"SELECT UserName FROM adminuser WHERE UserName='$username'");
if(mysqli_num_rows($checkUser) == 0)
die;*/

if($from =='0' && $to =='0' ){
if($cname != "All"){
$result = mysqli_query($con,"SELECT * FROM visadetailstable WHERE ClientName='$cname'");}
else{
$result = mysqli_query($con,"SELECT * FROM visadetailstable");}

$num_rows_inpage=5;
$num_rows = mysqli_num_rows($result);
echo $num_rows."-".$num_rows_inpage;
}
else{
if($cname != "All")
$result = mysqli_query($con, "SELECT * FROM visadetailstable WHERE ClientName='$cname' LIMIT $from , $to");
else
$result = mysqli_query($con, "SELECT * FROM visadetailstable LIMIT $from , $to");
$num_rows = mysqli_num_rows($result);
echo $num_rows.'-';
while ($row = mysqli_fetch_array($result)) {
echo  $row['Name'].'||'.$row['Ps_no'].'||'.$row['BU'].'||'.$row['Current_DH'].'||'.$row['Current_PoC'].'||'.$row['Availability_Status'].'||'.$row['Available_Date'].'||'.$row['Primary_Domain'].'||'.$row['Detailed_Skills'].'||'.$row['Selected_client'].'||'.$row['Onboardng_Date'].'||'.$row['PoC_DH'].'@||@';
}
}
?>

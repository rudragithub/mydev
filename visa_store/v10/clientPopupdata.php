<?php
//displaying values from database in table

$con=mysqli_connect("localhost","root","","visa_db");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$username = ($_GET['ps_no']);



$result = mysqli_query($con,"SELECT * FROM visadetails Where Ps_no='$username'");

$num_rows = mysqli_num_rows($result);

echo $num_rows."@||@";
if($num_rows > 0)
{

while ($row = mysqli_fetch_array($result)) {

echo  $row['slno'].'-'.$row['ClientName'].'||'.$row['BuHead'].'||'.$row['TargetDate'].'||'.$row['scheduleDate'].'@||@';
}
}
else
{
 echo 'invalid';
}

 mysqli_close($con);
?>




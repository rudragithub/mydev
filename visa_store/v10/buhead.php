<?php
//displaying values from database in table

$con=mysqli_connect("localhost","root","","visa_db");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

if (!isset($_GET['update'])) {$updateClient=$_GET['update'] = '';}else{$updateClient=$_GET['update'];};

if($updateClient == "")
{
	$result = mysqli_query($con, "SELECT *  FROM buhead");
	while ($row = mysqli_fetch_array($result)) {
	echo  $row['Name']."||";
	}
}
else
{
	 mysqli_query($con,"INSERT INTO buhead (ClientName) VALUES ('$updateClient')");
}

 mysqli_close($con);
?>







